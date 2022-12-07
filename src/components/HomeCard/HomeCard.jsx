import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../../assets/Logo.webp";
import "../../style/style.css";

/**
 *  HomeCard is a React component in charge of displaying welcome card
 *  displayed on landing page
 *
 *  @returns a card (react-bootstrap)
 */
function HomeCard() {
	return (
		<Card style={{ width: "18rem" }} bg="light" className="p-3 m-3 h-50">
			<Card.Img
				fetchpriority="high"
				width="253"
				height="309"
				variant="top"
				src={logo}
				alt="logo wealth health"
			/>
			<Card.Body>
				<Card.Title style={{ textAlign: "center" }}>HRnet</Card.Title>
				<Card.Text>Human Resources Networking</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default HomeCard;
