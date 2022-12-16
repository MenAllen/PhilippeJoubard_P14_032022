import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import ListEmployees from "../pages/ListEmployees";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

describe("Home", () => {
	test("Should render without crash", async () => {
		render(
			<Provider store={store}>
				<Router>
					<ListEmployees />
				</Router>
			</Provider>
		);
    expect(screen.getByRole("heading", { level: 1, text: "List Employees" })).toBeTruthy();
    expect(screen.getByText("COL")).toBeTruthy();
    expect(screen.getByText("Show")).toBeTruthy();
    expect(screen.getByText("Search")).toBeTruthy();

    expect(screen.getByText("Employee Identity")).toBeTruthy();
		expect(screen.getByText('First Name')).toBeTruthy();
    expect(screen.getByText('Last Name')).toBeTruthy();
    expect(screen.getByText('Birth Date')).toBeTruthy();

		expect(screen.getByText("Location")).toBeTruthy();
    expect(screen.getByText('Street')).toBeTruthy();
    expect(screen.getByText('City')).toBeTruthy();
    expect(screen.getByText('Zip Code')).toBeTruthy();

    expect(screen.getByText("Information")).toBeTruthy();
    expect(screen.getByText('Start Date')).toBeTruthy();
    expect(screen.getByText('Department')).toBeTruthy();
    
	});
});