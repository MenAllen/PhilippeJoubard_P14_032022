import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HomeCard from "../components/HomeCard/HomeCard";
import "../style/style.css";

/**
 * Home is a function returning a Container displaying a welcome page
 * with Wealth Health logo
 *
 * @returns A Container with HomeCard component.
 */
const Home = () => {
	return (
		<section role="contentinfo" aria-label="Welcome page with logo">
			<Container fluid className="bg-color-custom">
				<Row className="main-row justify-content-center align-items-center" bg="primary">
					<HomeCard />
				</Row>
			</Container>
		</section>
	);
};

export default Home;
