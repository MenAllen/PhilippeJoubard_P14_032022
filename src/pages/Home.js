import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadEmployees, activateState } from "../features/employeeSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HomeCard from "../components/HomeCard/HomeCard";
import "../style/style.css";

/**
 * Home is a function that returns a Container displaying  a welcome page
 * with Wealth Health logo
 * 
 * @returns A Container with HomeCard component.
 */
const Home = () => {
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
		<section role="contentinfo" aria-label="Welcome page with logo">
			<Container fluid className="bg-color-custom">
				<Row className="main-row justify-content-center align-items-center" bg="primary">
					<HomeCard />
				</Row>
			</Container>
		</section>
	);
};

export default Home;
