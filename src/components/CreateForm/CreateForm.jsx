import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { addEmployee, saveEmployees } from "../../features/employeeSlice";
import STATES from "../../data/STATES.json";
import { checkForm } from "../../utils/FormValidation";
import "../../style/style.css";

/**
 *  CreateForm is a React component in charge of displaying form to create en employee
 *
 *  @returns a validated form (react-bootstrap)
 */
function CreateForm() {
	const dispatch = useDispatch();
	const initialResult = {
		firstName: "",
		lastName: "",
		birthDate: "",
		street: "",
		city: "",
		state: "",
		zipcode: "",
		department: "",
		startDate: "",
	};

	// Hook states declaration & initialisation
	const [validated, setValidated] = useState(false);
	const [inputResult, setInputResult] = useState(initialResult);

	// Fill in input result after submit
	const updateInput = (field, value) => {
		switch (field) {
			case "firstName":
				inputResult.firstName = value;
				break;
			case "lastName":
				inputResult.lastName = value;
				break;
			case "birthDate":
				inputResult.birthDate = value;
				break;
			case "street":
				inputResult.street = value;
				break;
			case "city":
				inputResult.city = value;
				break;
			case "state":
				inputResult.state = value;
				break;
			case "zipcode":
				inputResult.zipcode = value;
				break;
			case "startDate":
				inputResult.startDate = value;
				break;
			case "department":
				inputResult.department = value;
				break;
			default:
		}
		setInputResult(inputResult);
	};

	// Manage form validation when submit button pressed
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		console.log("handleSubmit: ", inputResult);
		if (form.checkValidity() === false) {
			console.log("checkValidity false");
			e.stopPropagation();
			setValidated(true);
			return;
		}

		setValidated(true);
		const report = checkForm(inputResult);
		console.log("report: ", report);
		if (report === "OK") {
			dispatch(addEmployee(inputResult));
			dispatch(saveEmployees());
			setInputResult(initialResult);
			e.target.reset();
			setValidated(false);
		}
	};

	const handleReset = (e) => {
		e.preventDefault();
		e.target.reset();
		setValidated(false);
	};

	return (
		<>
			<Col md="auto" className="form-container m-5">
				<Row>
					<h1 className="form-title">Create Employee</h1>
				</Row>
				<Form
					className="formular"
					noValidate
					validated={validated}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Container className="sub-form-container">
						<Row>
							<Form.Group as={Col} className="mb-3" controlId="formFirstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									onChange={(e) => {
										updateInput("firstName", e.target.value);
									}}
									required
									placeholder="Firstname"
								/>
							</Form.Group>
							<Form.Control.Feedback type="invalid">
								Please provide a valid city.
							</Form.Control.Feedback>
							<Form.Group as={Col} className="mb-3" controlId="formLastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									onChange={(e) => {
										updateInput("lastName", e.target.value);
									}}
									required
									placeholder="Lastname"
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group as={Col} className="mb-3" controlId="formBirthDate">
								<Form.Label>Birth Date</Form.Label>
								<Form.Control
									required
									type="date"
									onChange={(e) => {
										updateInput("birthDate", e.target.value);
									}}
									placeholder="Birth Date"
									aria-label="Birth Date"
								/>
							</Form.Group>
						</Row>
					</Container>
					<Container className="sub-form-container">
						<Row>
							<Form.Group as={Col} className="mb-3" controlId="formStreet">
								<Form.Label>Street</Form.Label>
								<Form.Control
									onChange={(e) => {
										updateInput("street", e.target.value);
									}}
									required
									placeholder="Street"
								/>
							</Form.Group>
							<Form.Group as={Col} className="mb-3" controlId="formCity">
								<Form.Label>City</Form.Label>
								<Form.Control
									onChange={(e) => {
										updateInput("city", e.target.value);
									}}
									required
									placeholder="City"
								/>
							</Form.Group>
						</Row>
						<Row>
							<Col>
								<Form.Label>State</Form.Label>
								<Form.Select
									onChange={(e) => {
										updateInput("state", e.target.value);
									}}
									required>
									<option value="">Select State</option>
									{STATES.map((element) => {
										return (
											<option key={element.abbreviation} value={element.name}>
												{element.name}
											</option>
										);
									})}
								</Form.Select>
							</Col>
							<Form.Group as={Col} className="mb-3" controlId="formZipCode">
								<Form.Label>Zip Code</Form.Label>
								<Form.Control
									onChange={(e) => {
										updateInput("zipcode", e.target.value);
									}}
									required
									type="number"
									placeholder="Zip Code"
								/>
							</Form.Group>
						</Row>
					</Container>
					<Container className="sub-form-container">
						<Row>
							<Form.Group as={Col} className="mb-3" controlId="formStartDate">
								<Form.Label>Start Date</Form.Label>
								<Form.Control
									onChange={(e) => {
										updateInput("startDate", e.target.value);
									}}
									required
									type="date"
									placeholder="Start Date"
								/>
							</Form.Group>
							<Col>
								<Form.Label>Department</Form.Label>
								<Form.Select
									onChange={(e) => {
										updateInput("department", e.target.value);
									}}
									required>
									<option value="">Select State</option>
									<option value="1">Sales</option>
									<option value="2">Marketing</option>
									<option value="3">Engineering</option>
									<option value="4">Human Resources</option>
									<option value="5">Legal</option>
								</Form.Select>
							</Col>
						</Row>
					</Container>
					<Container fluid className="d-flex justify-content-around" >
					<Button type="submit" className="btn btn-success">
						Submit
					</Button>
					<Button type="reset" className="btn bg-transparent">
						Reset
					</Button>
					</Container>
				</Form>
			</Col>
		</>
	);
}

export default CreateForm;
