import { createSlice } from "@reduxjs/toolkit";

/**
 * initial state initialisation
 */
const initialState = { stateActive: false, employeeList: [] };

/**
 *  Redux employee slice creation, part of Redux store. It includes
 *    Initial state
 *    Reducers :
 *      addEmployee			load employee in Redux store
 * 			saveEmployees		load employeeList in localStorage	
 * 			uploadEmployees load employeeList from localStorage to Redux, on each page reload if required
 * 			activateState 	set stateActive to true when app is running (called on each page relaod)
 * 			
 */
const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		addEmployee: (state, { payload }) => {
			state.employeeList.push(payload);
		},
		saveEmployees: (state) => {
			localStorage.setItem("employeeList", JSON.stringify(state));
		},
		uploadEmployees: (state, { payload }) => {
			payload.employeeList.map((elt) => state.employeeList.push(elt));
		},
		activateState: (state) => {
			state.stateActive = true;
		},
	},
});

export const { addEmployee, saveEmployees, uploadEmployees, activateState } = employeeSlice.actions;
export default employeeSlice.reducer;
