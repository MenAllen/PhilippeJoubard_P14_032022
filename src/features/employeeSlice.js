import { createSlice } from "@reduxjs/toolkit";

/**
 *  Redux employee slice creation, part of Redux store. It includes
 *    Initial state
 *    Reducers :
 *      addEmployee			load employee in Redux store
 * 			uploadEmployees load employees from mockeddata to Redux store, after clearing the Redux store
 */
const employeeSlice = createSlice({
	name: "employee",
	initialState: { employeeList: [] },
	reducers: {
		addEmployee: (state, { payload }) => {
			state.employeeList.push(payload);
		},
		uploadEmployees: (state, { payload }) => {
			state.employeeList = [];
			payload.employeeList.map((elt) => state.employeeList.push(elt));
		},
	},
});

export const { addEmployee, uploadEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
