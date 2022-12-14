import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadEmployees, activateState } from "../features/employeeSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CreateForm from "../components/CreateForm/CreateForm";
import Populate from "../components/Populate/Populate";
import "../style/style.css";

/**
 * CreateEmployee is a function that returns a React Container including a form for employee declaration
 *
 * @returns A Container with Form component.
 */
const CreateEmployee = () => {
	const dispatch = useDispatch();
	const { stateActive } = useSelector((state) => state.employee);

	// Update state if state redux empty
	useEffect(() => {
		// if state empty & employeeList exists in localStorage, then upload state
		if (!stateActive && localStorage.getItem("employeeList")) {
			dispatch(uploadEmployees(JSON.parse(localStorage.getItem("employeeList"))));
		}

		dispatch(activateState());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<section role="contentinfo" aria-label="Create Employees page">
			<Container fluid className="h-100 bg-color-custom">
				<Row className="main-row justify-content-center align-items-center" bg="primary">
					<CreateForm />
					<Populate />
				</Row>
			</Container>
		</section>
	);
};

export default CreateEmployee;
