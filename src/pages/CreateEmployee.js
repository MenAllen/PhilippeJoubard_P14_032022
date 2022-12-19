import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CreateForm from "../components/CreateForm/CreateForm";
import "../style/style.css";

/**
 * CreateEmployee is a function that returns a React Container including CreateForm component to declare an employee
 *
 * @returns A Container with CreateForm component.
 */
const CreateEmployee = () => {
	return (
		<section role="contentinfo" aria-label="Create Employees page">
			<Container fluid className="h-100 bg-color-custom">
				<Row className="main-row justify-content-center align-items-center" bg="primary">
					<CreateForm />
				</Row>
			</Container>
		</section>
	);
};

export default CreateEmployee;
