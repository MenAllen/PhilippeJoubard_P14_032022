import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/LogoWh.webp";
import "../../style/style.css";

/**
 * Header is a React component returning a header element with two nav elements inside of it:
 * first a link to the home page, second a link to home page, create employee page and list employee page
 *
 * @returns A header element with nav menu.
 */
function Header() {
	return (
		<header>
			<Navbar bg="white" expand="md">
				<Container className="justify-content-between">
					<Navbar bg="white">
						<NavLink to="/">
							<img
								alt="logo wealth health"
								src={logo}
								width="60"
								height="56"
								className="d-inline-block align-top"
								fetchpriority="high"
							/>
						</NavLink>
					</Navbar>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="right-aligned">
						<Nav className="me-auto">
							<NavLink to="/" className="nav-item">
								Home
							</NavLink>
							<NavLink to="/create" className="nav-item">
								Create Employee
							</NavLink>
							<NavLink to="/list" className="nav-item">
								List Employees
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;
