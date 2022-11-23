import { createSlice } from "@reduxjs/toolkit";


/**
 * initial state initialisation
 */
const initialState = { stateActive: false, employeeList: [] };

/**
 *  Redux create employee slice creation, part of Redux store. It includes
 *    Initial state
 *    Reducers :
 *      addEmployee
 * 			saveEMployees
 * 			uploadEmployees
 */
const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		addEmployee: (state, { payload }) => {
			console.log("addEmployee: ", payload, state.employeeList)
			state.employeeList.push(payload)
		},
		saveEmployees: (state) => {
			console.log("saveEmployees: ", state)
			localStorage.setItem("employeeList", JSON.stringify(state));
		},
		uploadEmployees: (state, { payload }) => {
			console.log("uploadEmployees: ", payload)
			payload.employeeList.map((elt) => state.employeeList.push(elt))
		},
		activateState: (state) => {
			console.log("activateState")
			state.stateActive = true
		}
	},
});

export const {
	addEmployee, saveEmployees, uploadEmployees, activateState
} = employeeSlice.actions;
export default employeeSlice.reducer;
