import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadEmployees, activateState } from "../features/employeeSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "../components/Table/Table";
import "../style/style.css";
import { COLUMNS } from "../data/COLUMNS";

/**
 * ListEmployee is a function that returns a Container including a Table containing the list of Employees
 * 
 * @returns A Container with EMployee Table.
 */
function ListEmployees() {
	const { employeeList, stateActive } = useSelector((state) => state.employee);
	const dispatch = useDispatch();

	// Update state if state redux empty
	useEffect(() => {
		console.log("List Employees useEffect: ", stateActive);

		// if state empty & employeeList exists in localStorage, then upload state
		if (!stateActive && localStorage.getItem("employeeList")) {
			dispatch(uploadEmployees(JSON.parse(localStorage.getItem("employeeList"))));
		}
		dispatch(activateState());
	}, []);

	// data needs to be updated when page refresh
	const columns = useMemo(() => COLUMNS, [])
	const data = useMemo(() => employeeList, [employeeList])

	console.log(columns)

	return (
		<Container fluid className="h-100 bg-color-custom">			
			<Row className="main-row justify-content-center align-items-center" bg="primary">
				<Table columns={columns} data={data}/>
			</Row>
		</Container>
	);
}

export default ListEmployees;
