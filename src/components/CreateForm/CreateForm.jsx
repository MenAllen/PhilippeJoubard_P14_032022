import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "../Modal/Modal";
import { addEmployee, saveEmployees } from "../../features/employeeSlice";
import STATES from "../../data/STATES.json";
import checkForm from "../../utils/FormValidation";
import "../../style/style.css";

/**
 *  CreateForm is a React component in charge of displaying form to create en employee
 *
 *  @returns a validated form (react-bootstrap)
 */
function CreateForm() {
	const dispatch = useDispatch();
	let inputResult = "";

	// Hook states declaration & initialisation
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [birthdate, setBirthdate] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [startdate, setStartdate] = useState("");
	const [department, setDepartment] = useState("");
	const [validated, setValidated] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [messageModal, setMessageModal] = useState("");

	const inputValue = {
		firstname,
		lastname,
		birthdate,
		street,
		city,
		state,
		startdate,
		zipcode,
		department
	}

	function resetInputValues() {
		setFirstname("");
		setLastname("");
		setBirthdate("");
		setStreet("");
		setCity("");
		setState("");
		setStartdate("");
		setZipcode("");
		setDepartment("");
	}

	// Manage form validation when submit button pressed
	function handleSubmit (e) {
		e.preventDefault();
		const form = e.currentTarget;

		console.log("handleSubmit: ", inputValue);
		if (form.checkValidity() === false) {
			console.log("checkValidity false");
			e.stopPropagation();
			setValidated(true);
			return;
		}

		setValidated(true);
		inputResult = checkForm(inputValue);
		console.log("inputResult: ", inputResult);
		setMessageModal(inputResult);
		if (inputResult === "Employee successfully created !") {
			dispatch(addEmployee(inputValue));
			dispatch(saveEmployees());
			resetInputValues();
			e.target.reset();
			setOpenModal(true);
			setValidated(false);
			return;
		}

		if (inputResult !== "") setOpenModal(true);
	};

	function handleReset (e) {
		console.log("handleReset")
		e.preventDefault();
		resetInputValues();
		setValidated(false);
		e.target.reset();
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
									required
									placeholder="Firstname"
									onChange={(e) => setFirstname(e.target.value)}
									value={firstname}
								/>
							</Form.Group>
							<Form.Control.Feedback type="invalid">
								Please provide a valid city.
							</Form.Control.Feedback>
							<Form.Group as={Col} className="mb-3" controlId="formLastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									required
									placeholder="Lastname"
									onChange={(e) => setLastname(e.target.value)}
									value={lastname}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group as={Col} className="mb-3" controlId="formBirthDate">
								<Form.Label>Birth Date</Form.Label>
								<Form.Control
									required
									type="date"
									placeholder="Birth Date"
									onChange={(e) => setBirthdate(e.target.value)}
									value={birthdate}
								/>
							</Form.Group>
						</Row>
					</Container>
					<Container className="sub-form-container">
						<Row>
							<Form.Group as={Col} className="mb-3" controlId="formStreet">
								<Form.Label>Street</Form.Label>
								<Form.Control
									required
									placeholder="Street"
									onChange={(e) => setStreet(e.target.value)}
									value={street}
								/>
							</Form.Group>
							<Form.Group as={Col} className="mb-3" controlId="formCity">
								<Form.Label>City</Form.Label>
								<Form.Control
									required
									placeholder="City"
									onChange={(e) => setCity(e.target.value)}
									value={city}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Col>
								<Form.Label>State</Form.Label>
								<Form.Select
									onChange={(e) => setState(e.target.value)}
									required
									value={state}>
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
									required
									type="number"
									placeholder="Zip Code"
									onChange={(e) => setZipcode(e.target.value)}
									value={zipcode}
								/>
							</Form.Group>
						</Row>
					</Container>
					<Container className="sub-form-container">
						<Row>
							<Form.Group as={Col} className="mb-3" controlId="formStartDate">
								<Form.Label>Start Date</Form.Label>
								<Form.Control
									required
									type="date"
									placeholder="Start Date"
									onChange={(e) => setStartdate(e.target.value)}
									value={startdate}
								/>
							</Form.Group>
							<Col>
								<Form.Label>Department</Form.Label>
								<Form.Select
									onChange={(e) => setDepartment(e.target.value)}
									required
									value={department}>
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
					<Container fluid className="d-flex justify-content-around">
						<Button type="submit" className="btn btn-success">
							Submit
						</Button>
						<Button type="reset" className="btn bg-transparent">
							Reset
						</Button>
					</Container>
				</Form>
			</Col>
			<Modal display={openModal} setDisplay={setOpenModal} message={messageModal} />
		</>
	);
}

export default CreateForm;
