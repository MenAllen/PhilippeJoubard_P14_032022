import React, { useState } from "react";
import { Modal } from "@menallen/plugin-modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../style/style.css";

/**
 * Error page is called whenever the url given is not expected
 *
 * @returns {React.ReactElement} modal with error message and link to Home page
 */

function Error() {
	const errorColor = '#f08d3a';
	const errorMessage = "Error ! Requested page doesn't exist";
	const paramsModal = {bgColor: errorColor, Color: 'white', link: "/"};

	const [openModal, setOpenModal] = useState(true);

	return (
		<Container fluid className="bg-color-custom">
			<Row className="main-row justify-content-center align-items-center" bg="primary">
				<Modal display={openModal} setDisplay={setOpenModal} message={errorMessage} params={paramsModal}/>
			</Row>
		</Container>
	)
}

export default Error;
