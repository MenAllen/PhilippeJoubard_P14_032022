import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { store } from "../store";
import Error from "../pages/Error";
import { render, screen } from "@testing-library/react";


describe("Home", () => {
	test("Should render without crash", async () => {
		render(
			<Provider store={store}>
				<Router>
					<Error />
				</Router>
			</Provider>
		);
		expect(screen.getByText("Error ! Requested page doesn't exist")).toBeTruthy();
	});
});