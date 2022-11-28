import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CreateForm from "../components/CreateForm/CreateForm";
import "../style/style.css";

/**
 * CreateEmployee is a function that returns a Container containing a form to be filled
 * @returns A Container with Form component.
 */
const CreateEmployee = () => {
	return (
		<Container fluid className="h-100 bg-color-custom">
			<Row className="main-row justify-content-center align-items-center" bg="primary">
				<CreateForm />
			</Row>
		</Container>
	);
}

export default CreateEmployee;
