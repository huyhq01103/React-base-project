import React, { memo, useContext } from "react";
import { Link } from "src/lib";

import { MyContext } from "src/contexts/MyContext";
import { FooterSocial } from "src/constants";
const Footer = () => {
	const { langData, locale } = useContext(MyContext);
	const { footer } = langData;
	return (
		<footer className="footer">
			<div className="container">
				footer
			</div>
		</footer>
	);
};

export default memo(Footer);
