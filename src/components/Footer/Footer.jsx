import React from "react";
import "../../style/style.css";

/**
 *  Footer is a React component in charge of displaying footer part of all pages
 *
 *  @returns a footer html with copyright message
 */
function Footer() {
	return (
		<footer className="footer">
			<p className="footer-text">Copyright 2022 Wealth Health</p>
		</footer>
	);
}

export default Footer;
