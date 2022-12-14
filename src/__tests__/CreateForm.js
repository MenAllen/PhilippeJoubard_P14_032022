import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import CreateForm from "../components/CreateForm/CreateForm";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("CreateForm", () => {
	test("Should render without crash and call handleSubmit on click", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateForm />
				</Router>
			</Provider>
		);
    const form = screen.getByText('Submit');
    const handleSubmit = jest.fn((e) => e.preventDefault());
		
    form.addEventListener("submit", handleSubmit);
    fireEvent.submit(form);
		expect(handleSubmit.mock.calls.length).toBe(1);
	});

	test("Should render without crash and call handleReset on click", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateForm />
				</Router>
			</Provider>
		);
    const form = screen.getByText('Reset');
    const handleReset = jest.fn((e) => e.preventDefault());

    form.addEventListener("reset", handleReset);
    fireEvent.reset(form);
		expect(handleReset.mock.calls.length).toBe(1);
	});

	test("Should render without crash and create employee on click", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateForm />
				</Router>
			</Provider>
		);
		const element = screen.getByRole("heading", { level: 1, text: "Create Employees" });
		expect(element).toBeInTheDocument();

		const submitButton = screen.getByRole("button", { type: "submit"});
		await userEvent.click(submitButton);

		//		screen.debug();
	})


});
