import React, { useContext, useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { MyContext } from "src/contexts/MyContext";
import { NavLink } from "src/lib";
import { stripLocale } from "src/utils";

const Header = ({
	location: { pathname },
	match: {
		params: { locale },
	},
	history,
}) => {
	const { langData, setLocale, changeLanguage, width } = useContext(MyContext);
	const [isOpen, setOpen] = useState(false);
	const [toggle, setToggle] = useState(false);
	const options = [
		{ value: "vn", label: "VIE" },
		{ value: "en", label: "ENG" },
	];

	useEffect(() => {
		if (!locale) {
			history.push("/");
		} else {
			setLocale(locale);
			changeLanguage(locale);
		}

		if (!document || !document.body) {
			return;
		}
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflowY = "initial";
		}
	}, [isOpen, toggle, locale, setLocale]);

	const toggleNav = (e) => {
		if (width < 992) {
			e.preventDefault();
			setToggle(!toggle);
		}
	};
	const langUpdate = (e) => {
		let pathRedirect = '';
		if(e.value !== 'vn') {
			pathRedirect = `/${e.value}${stripLocale(pathname, locale)}`;
		} else {
			pathRedirect = '/';
		}

		changeLanguage(e.value);
		history.push(pathRedirect);
	};

	return (
		<header
			id="header"
			className={`header-main`}
			role="navigation"
			aria-label="main navigation"
		>
			<div className="header-content clearfix container">
				<section className="navbar-brand">
					<div className="logo">
						<NavLink className="navbar-item" to="/" exact>
							<img
								src={"/logo.svg"}
								alt="Coccoc logo"
								width="127"
								height="40"
							/>
						</NavLink>
					</div>
					<div
						role="button"
						className={`navbar-burger burger ${isOpen && "is-active"}`}
						aria-label="menu"
						aria-expanded="false"
						onClick={() => setOpen(!isOpen)}
					>
						<div className="item" aria-hidden="true"></div>
					</div>
				</section>
				<hr />
				<div className={`header-body container ${isOpen && "is-active"}`}>
					<section className="navbar">
						{langData.nav.map((item, index) => (
							<div
								className={
									!item?.sub ? "navbar-item" : "navbar-item navbar-submenu"
								}
								key={index}
							>
								<a
									className={toggle ? "expended" : ""}
									// activeClassName="is-active"
									href={item.path}
									onClick={(e) => (!item?.sub ? setOpen(false) : toggleNav(e))}
									exact={item.path === "/"}
								>
									{item.title}
								</a>
							</div>
						))}
					</section>
					<section className="other">
						<Dropdown
							options={options}
							value={locale ? locale : "vn"}
							onChange={(e) => langUpdate(e)}
						/>
					</section>
				</div>
			</div>
		</header>
	);
};
export default Header;
