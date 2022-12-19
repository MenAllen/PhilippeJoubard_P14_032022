import { createSlice } from "@reduxjs/toolkit";

/**
 *  Redux employee slice creation, part of Redux store. It initializes the state (initialState) and
 *  declare two actions : addEmployee & uploadEmployees
 * 
 *  @returns None
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
