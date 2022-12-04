import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/LogoWh.webp";
import "../../style/style.css";

/**
 *  Header is a React component in charge of displaying header part of all pages
 *  depending on the connected state, it will display specific navigation menu
 *
 *  @returns a nav with navigation menu
 */
function Header() {
	return (
		<Navbar bg="light" expand="md" >
			<Container className='justify-content-between'>
				<Navbar bg="light">
						<NavLink to="/">
							<img
								alt="logo wealth health"
								src={logo}
								width="80"
								height="80"
								className="d-inline-block align-top small-size"
								fetchpriority="high"
							/>
						</NavLink>
				</Navbar>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className='right-aligned'>
					<Nav className="me-auto">
						<NavLink to="/" className="nav-item">Home</NavLink>
						<NavLink to="/create" className="nav-item">Create Employee</NavLink>
						<NavLink to="/list" className="nav-item">List Employees</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
