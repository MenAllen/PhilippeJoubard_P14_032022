import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../../assets/LogoWh.jpg";
import "../../style/style.css";

/**
 *  HomeCard is a React component in charge of displaying welcome card
 *  displayed on landing page
 *
 *  @returns a card (react-bootstrap)
 */
function HomeCard() {
	return (
		<Card style={{ width: "18rem" }} bg="light" className="p-5 m-5 h-50">
			<Card.Img variant="top" src={logo} />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the card's
					content.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default HomeCard;
