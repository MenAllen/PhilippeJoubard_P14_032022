import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Modal } from "@menallen/plugin-modal";
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
	const CustomGreen = '#93AD18';
	const paramsModal = {bgColor: CustomGreen, Color: 'white', link: ""};


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
		department,
	};

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
	function handleSubmit(e) {
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
	}

	function handleReset(e) {
		console.log("handleReset");
		e.preventDefault();
		resetInputValues();
		setValidated(false);
		e.target.reset();
	}

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
							<Form.Group as={Col} className="mb-3">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									required
									placeholder="Firstname"
									onChange={(e) => setFirstname(e.target.value)}
									value={firstname}
									minLength={2}
									maxLength={50}
									pattern="^[( )a-zA-Z]+$"
								/>
								<Form.Control.Feedback className='text-dark' type="invalid">
									must be 2 to 50 chars, letters only
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} className="mb-3">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									required
									placeholder="Lastname"
									onChange={(e) => setLastname(e.target.value)}
									value={lastname}
									minLength={2}
									maxLength={50}
									pattern="^[( )a-zA-Z]+$"
								/>
								<Form.Control.Feedback className='text-dark' type="invalid">
									must be 2 to 50 chars, letters only
								</Form.Control.Feedback>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group as={Col} className="mb-3">
								<Form.Label>Birth Date</Form.Label>
								<Form.Control
									required
									type="date"
									placeholder="Birth Date"
									onChange={(e) => setBirthdate(e.target.value)}
									value={birthdate}
									id="birthdatemin"
									name="birthdatemin"
									min="1930-01-01"
									max="2007-01-01"
								/>
								<Form.Control.Feedback className='text-dark' type="invalid">
									must be at least 15 years old
								</Form.Control.Feedback>
							</Form.Group>
						</Row>
					</Container>
					<Container className="sub-form-container">
						<Row>
							<Form.Group as={Col} className="mb-3">
								<Form.Label>Street</Form.Label>
								<Form.Control
									required
									placeholder="Street"
									onChange={(e) => setStreet(e.target.value)}
									value={street}
									minLength={2}
									maxLength={50}
								/>
								<Form.Control.Feedback className='text-dark' type="invalid">must be 2 to 50 chars</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} className="mb-3">
								<Form.Label>City</Form.Label>
								<Form.Control
									required
									placeholder="City"
									onChange={(e) => setCity(e.target.value)}
									value={city}
									minLength={2}
									maxLength={50}
								/>
								<Form.Control.Feedback className='text-dark' type="invalid">must be 2 to 50 chars</Form.Control.Feedback>
							</Form.Group>
						</Row>
						<Row>
							<Col>
								<Form.Label>State</Form.Label>
								<Form.Select onChange={(e) => setState(e.target.value)} required value={state}>
									<option value="">Select State</option>
									{STATES.map((element) => {
										return (
											<option key={element.abbreviation} value={element.name}>
												{element.name}
											</option>
										);
									})}
								</Form.Select>
								<Form.Control.Feedback className='text-dark' type="invalid">
									Select State
								</Form.Control.Feedback>
							</Col>
							<Form.Group as={Col} className="mb-3">
								<Form.Label>Zip Code</Form.Label>
								<Form.Control
									required
									type="number"
									placeholder="Zip Code"
									onChange={(e) => setZipcode(e.target.value)}
									value={zipcode}
									min={10000}
									max={99999}
								/>
								<Form.Control.Feedback className='text-dark' type="invalid">must be 5 numbers</Form.Control.Feedback>
							</Form.Group>
						</Row>
					</Container>
					<Container className="sub-form-container">
						<Row>
							<Form.Group as={Col} className="mb-3">
								<Form.Label>Start Date</Form.Label>
								<Form.Control
									required
									type="date"
									placeholder="Start Date"
									onChange={(e) => setStartdate(e.target.value)}
									value={startdate}
									id="startdatemin"
									name="startdatemin"
									min="1930-01-01"
									max="2022-12-01"
								/>
								<Form.Control.Feedback className='text-dark' type="invalid">
									must be at least 15 years old
								</Form.Control.Feedback>
							</Form.Group>
							<Col>
								<Form.Label>Department</Form.Label>
								<Form.Select
									onChange={(e) => setDepartment(e.target.value)}
									required
									value={department}>
									<option value="">Select Department</option>
									<option value="Sales">Sales</option>
									<option value="Marketing">Marketing</option>
									<option value="Engineering">Engineering</option>
									<option value="Human Resources">Human Resources</option>
									<option value="Legal">Legal</option>
								</Form.Select>
								<Form.Control.Feedback className='text-dark' type="invalid">
									Select Department
								</Form.Control.Feedback>
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
			<Modal display={openModal} setDisplay={setOpenModal} message={messageModal} params={paramsModal} />
		</>
	);
}

export default CreateForm;
