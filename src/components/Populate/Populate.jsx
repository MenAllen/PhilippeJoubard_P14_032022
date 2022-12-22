import React, { useState } from "react";
import { Modal } from "@menallen/plugin-modal";
import { useDispatch } from "react-redux";
import { uploadEmployees } from "../../features/employeeSlice";
import MOCKDATA from "../../data/MOCKDATA";
import "../../style/style.css";

/**
 * Populate is a React component used to upload employees from MOCKDATA.json file
 *
 * @returns A div with a Button for calling Modal when populate is finished.
 */
function Populate() {
	const dispatch = useDispatch();
	const populateColor = "#93AD18";
	const populateMessage = "Populate successfully done !";
	const paramsModal = { bgColor: populateColor, Color: "white", link: "" };
	const [openModal, setOpenModal] = useState(false);

	const launchPopulate = () => {
		dispatch(uploadEmployees({ employeeList: MOCKDATA }));
		setOpenModal(!openModal);
	};

	return (
		<>
			<button
				className="populateBtn"
				type="button"
				title="Populate table"
				onClick={launchPopulate}>
				Pop{openModal}
			</button>
			<Modal
				display={openModal}
				setDisplay={setOpenModal}
				message={populateMessage}
				params={paramsModal}
			/>
		</>
	);
}

export default Populate;
