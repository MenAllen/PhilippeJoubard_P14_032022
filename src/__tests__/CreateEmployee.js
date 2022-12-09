import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import CreateEmployee from "../pages/CreateEmployee";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
	test("Should render without crash", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateEmployee />
				</Router>
			</Provider>
		);
		expect(screen.getByRole("heading", { level: 1, text: "Create Employ" })).toBeTruthy();
    expect(screen.getByText('First Name')).toBeTruthy();
    expect(screen.getByText('Last Name')).toBeTruthy();
    expect(screen.getByText('Birth Date')).toBeTruthy();
    expect(screen.getByText('Street')).toBeTruthy();
    expect(screen.getByText('City')).toBeTruthy();
    expect(screen.getByText('Zip Code')).toBeTruthy();
    expect(screen.getByText('Start Date')).toBeTruthy();
    expect(screen.getByText('Department')).toBeTruthy();
    expect(screen.getByText('Submit')).toBeTruthy();
    expect(screen.getByText('Reset')).toBeTruthy();
	});
});
