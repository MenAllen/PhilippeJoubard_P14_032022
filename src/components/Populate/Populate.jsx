import React, { useState } from "react";
import { Modal } from "@menallen/plugin-modal";
import { useSelector, useDispatch } from "react-redux";
import { uploadEmployees, saveEmployees } from "../../features/employeeSlice";
import Container from "react-bootstrap/Container";
import MOCKDATA from "../../data/MOCKDATA";
import "../../style/style.css";

/**
 * Populate is a React component used to populate t employeeList from file
 *
 * @returns A div with a Button for calling Modal when populate is finished.
 */
function Populate() {
  const dispatch = useDispatch();
  const { stateActive } = useSelector((state) => state.employee);
  const populateColor = "#f08d3a";
	const populateMessage = "Populate successfully done !";
	const paramsModal = { bgColor: populateColor, Color: "white", link: "/create" };
	const [openModal, setOpenModal] = useState(false);

	const launchPopulate = () => {
    dispatch(uploadEmployees({ stateActive, employeeList: MOCKDATA }));
    dispatch(saveEmployees());
		setOpenModal(!openModal);
	};

	return (
		<Container className="justify-content-start">
			<button className={openModal ? "populateBtn hidden" : "populateBtn"} type="button" title="Populate table" onClick={launchPopulate}>
				Pop{openModal}
			</button>
			<Modal
				display={openModal}
				setDisplay={setOpenModal}
				message={populateMessage}
				params={paramsModal}
			/>
		</Container>
	);
}

export default Populate;
