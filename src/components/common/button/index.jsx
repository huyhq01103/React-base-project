import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";

import { MyContext } from "src/contexts/MyContext";

const Button = ({
	className = "",
	title = "Button Title",
	type = "button",
	onClick = () => false,
	href,
	to,
	target = "_self",
	disabled,
}) => {
	const { locale } = useContext(MyContext);
	return type === "submit" ? (
		<button
			type="submit"
			disabled={disabled}
			className={`btn ${className}`}
			onClick={onClick}
		>
			{title}
		</button>
	) : href ? (
		<a
			type={type}
			disabled={disabled}
			className={`btn ${className}`}
			onClick={onClick}
			href={href}
			target={target}
			rel="noopener noreferrer"
		>
			{title}
		</a>
	) : (
		<Link
			type={type}
			disabled={disabled}
			className={`btn ${className}`}
			onClick={onClick}
			to={`/${locale}/${to}`}
			target={target}
		>
			{title}
		</Link>
	);
};

export default memo(Button);
