import React, { useState } from "react";
import { Modal } from "@menallen/plugin-modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../style/style.css";

/**
 * Error page is called whenever the url given doesn't exist.
 * It makes use of plugin modal to popup a message
 *
 * @returns a container including modal with error message and link to Home page
 */
function Error() {
	const errorColor = "#f08d3a";
	const errorMessage = "Error ! Requested page doesn't exist";
	const paramsModal = { bgColor: errorColor, Color: "white", link: "/" };

	const [openModal, setOpenModal] = useState(true);

	return (
		<section role="contentinfo" aria-label="navigation error modal">
			<Container fluid className="bg-color-custom">
				<Row className="main-row justify-content-center align-items-center" bg="primary">
					<Modal
						display={openModal}
						setDisplay={setOpenModal}
						message={errorMessage}
						params={paramsModal}
					/>
				</Row>
			</Container>
		</section>
	);
}

export default Error;
