import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadEmployees, activateState } from "../features/employeeSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CreateForm from "../components/CreateForm/CreateForm";
import "../style/style.css";

/**
 * CreateEmployee is a function that returns a Container containing a form to be filled
 * @returns A Container with Form component.
 */
const CreateEmployee = () => {
	const dispatch = useDispatch();
	const { stateActive } = useSelector((state) => state.employee);

	// Update state if state redux empty
	useEffect(() => {
		console.log("Create Employees useEffect: ", stateActive);

		// if state empty & employeeList exists in localStorage, then upload state
		if (!stateActive && localStorage.getItem("employeeList")) {
			dispatch(uploadEmployees(JSON.parse(localStorage.getItem("employeeList"))));
		}

		dispatch(activateState());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Container fluid className="h-100 bg-color-custom">
			<Row className="main-row justify-content-center align-items-center" bg="primary">
				<CreateForm />
			</Row>
		</Container>
	);
};

export default CreateEmployee;
