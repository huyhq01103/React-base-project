import React, { useState, useEffect } from 'react';
import translationEN from 'src/translations/en';
import translationVN from 'src/translations/vn';
const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
export const MyContext = React.createContext();

// export const LanguageProvider = MyContext.Provider;
export const AppProvider = ({ children }) => {
	const [locale, setLocale] = useState("vn");
	const [langData, setLangData] = useState(translationVN);
	const [width, setWidth] = useState(getWidth());

	useEffect(() => {
		let timeoutId = null;
		const resizeListener = () => {
			// prevent execution of previous setTimeout
			clearTimeout(timeoutId);
			// change width from the state object after 150 milliseconds
			timeoutId = setTimeout(() => setWidth(getWidth()), 150);
		};
		window.addEventListener("resize", resizeListener);
		return () => {
			window.removeEventListener("resize", resizeListener);
		};
	}, []);


	const changeLanguage = (e) => {
		let language = e;
		let data;
		if (language === "vn") {
			data = translationVN;
		} else {
			data = translationEN;
		}
		setLocale(language);
		setLangData(data);
	};
	return (
		<MyContext.Provider
			value={{
				locale,
				langData,
				width,
				setLocale,
				changeLanguage
			}}
		>
			{children}
		</MyContext.Provider>
	);
};
