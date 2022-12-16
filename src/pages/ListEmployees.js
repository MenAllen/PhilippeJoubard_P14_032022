import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Table from "../components/Table/Table";
import "../style/style.css";
import { COLUMNS } from "../data/COLUMNS";

/**
 * ListEmployees is a function that returns a React container including a table with list of employees.
 *
 * @returns A Container with Table displaying table list of employees.
 */
function ListEmployees() {
	const employees = useSelector((state) => state.employeeList);

	// data needs to be updated when page refresh
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => employees, [employees]);

	return (
		<section role="contentinfo" aria-label="List Employees table page">
			<Container fluid className="h-100 bg-color-custom">
				<Table columns={columns} data={data} />
			</Container>
		</section>
	);
}

export default ListEmployees;
