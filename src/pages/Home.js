import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadEmployees, saveEmployees, activateState } from "../features/employeeSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HomeCard from "../components/HomeCard/HomeCard";
import MOCKDATA from "../data/MOCKDATA";
import "../style/style.css";

/**
 * Home is a function that returns a Container that contains a Card
 * @returns A Container with HomeCard component.
 */
const Home = () => {
	const dispatch = useDispatch();
	const { stateActive } = useSelector((state) => state.employee);
	const dataMocked = false;

	// Update state if state redux empty
	useEffect(() => {
		console.log("Home useEffect: ", stateActive, dataMocked);

		// If dataMocked required upload from file 
		if (dataMocked) {
			dispatch(uploadEmployees({stateActive: false, employeeList: MOCKDATA}));
			dispatch(saveEmployees());
			return
		}

		// if state empty & employeeList exists in localStorage, then upload state
		if (!stateActive && localStorage.getItem("employeeList")) {
			dispatch(uploadEmployees(JSON.parse(localStorage.getItem("employeeList"))));
		}

		dispatch(activateState());
	}, []);

	return (
		<Container fluid className="bg-color-custom">
			<Row className="main-row justify-content-center align-items-center" bg="primary">
				<HomeCard />
			</Row>
		</Container>
	);
};

export default Home;
