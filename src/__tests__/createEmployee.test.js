import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import CreateEmployee from "../pages/CreateEmployee";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Home", () => {
	test("Should render without crash", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateEmployee />
				</Router>
			</Provider>
		);
		expect(screen.getByRole("heading", { level: 1, text: "Create Employee" })).toBeTruthy();
		expect(screen.getByText("First Name")).toBeTruthy();
		expect(screen.getByText("Last Name")).toBeTruthy();
		expect(screen.getByText("Birth Date")).toBeTruthy();

		expect(screen.getByText("Street")).toBeTruthy();
		expect(screen.getByText("City")).toBeTruthy();
		expect(screen.getByText("State")).toBeTruthy();
		expect(screen.getByText("Zip Code")).toBeTruthy();

		expect(screen.getByText("Start Date")).toBeTruthy();
		expect(screen.getByText("Department")).toBeTruthy();
	});

	test("Should render without crash and call handle submit on click with valid & invalid inputs", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateEmployee />
				</Router>
			</Provider>
		);

		//	Fill in the input fields before submit
		fireEvent.change(screen.getByPlaceholderText("Firstname"), {
			target: { value: "José-Pierre" },
		});

		fireEvent.change(screen.getByPlaceholderText("Lastname"), {
			target: { value: "De La Motte-Picquet" },
		});

		fireEvent.submit(screen.getByText("Submit"));

		expect(screen.getAllByText("must be at least 15 years old")[0]).toBeVisible();
	});

	test("Should render without crash and call handleSubmit on click with valid inputs but inconsistent dates", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateEmployee />
				</Router>
			</Provider>
		);

		//	Fill in the input fields before submit
		fireEvent.change(screen.getByPlaceholderText("Firstname"), {
			target: { value: "José-Pierre" },
		});

		fireEvent.change(screen.getByPlaceholderText("Lastname"), {
			target: { value: "De La Motte-Picquet" },
		});

		fireEvent.change(screen.getByPlaceholderText("Birth Date"), {
			target: { value: "1985-08-01" },
		});

		fireEvent.change(screen.getByPlaceholderText("Street"), {
			target: { value: "2, Rue Marcel-Cerdan" },
		});

		fireEvent.change(screen.getByPlaceholderText("City"), {
			target: { value: "Valparaiso" },
		});

		// Specific for select
		userEvent.selectOptions(
			screen.getByTestId("select-state"),
			screen.getByRole("option", { name: "Arizona" })
		);
		expect(screen.getByRole("option", { name: "Arizona" }).selected).toBe(true);

		fireEvent.change(screen.getByPlaceholderText("Zip Code"), {
			target: { value: "01234" },
		});

		fireEvent.change(screen.getByPlaceholderText("Start Date"), {
			target: { value: "1998-07-18" },
		});

		// Specific for select
		userEvent.selectOptions(
			screen.getByTestId("select-department"),
			screen.getByRole("option", { name: "Engineering" })
		);
		expect(screen.getByRole("option", { name: "Engineering" }).selected).toBe(true);

		fireEvent.submit(screen.getByText("Submit"));

		expect(
			screen.getByText("Start date must be at least 15 years after birthDate")
		).toBeInTheDocument();
	});

	test("Should render without crash and call handleSubmit on click with valid inputs", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateEmployee />
				</Router>
			</Provider>
		);

		//	Fill in the input fields before submit
		fireEvent.change(screen.getByPlaceholderText("Firstname"), {
			target: { value: "José-Pierre" },
		});

		fireEvent.change(screen.getByPlaceholderText("Lastname"), {
			target: { value: "De La Motte-Picquet" },
		});

		fireEvent.change(screen.getByPlaceholderText("Birth Date"), {
			target: { value: "1985-08-01" },
		});

		fireEvent.change(screen.getByPlaceholderText("Street"), {
			target: { value: "2, Rue Marcel-Cerdan" },
		});

		fireEvent.change(screen.getByPlaceholderText("City"), {
			target: { value: "Valparaiso" },
		});

		// Specific for select
		userEvent.selectOptions(
			screen.getByTestId("select-state"),
			screen.getByRole("option", { name: "Arizona" })
		);
		expect(screen.getByRole("option", { name: "Arizona" }).selected).toBe(true);

		fireEvent.change(screen.getByPlaceholderText("Zip Code"), {
			target: { value: "01234" },
		});

		fireEvent.change(screen.getByPlaceholderText("Start Date"), {
			target: { value: "2015-07-18" },
		});

		// Specific for select
		userEvent.selectOptions(
			screen.getByTestId("select-department"),
			screen.getByRole("option", { name: "Engineering" })
		);
		expect(screen.getByRole("option", { name: "Engineering" }).selected).toBe(true);

		fireEvent.submit(screen.getByText("Submit"));

		expect(screen.getByText("Employee successfully created !")).toBeInTheDocument();
	});

	test("Should render without crash and call handleSubmit on click with valid inputs", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateEmployee />
				</Router>
			</Provider>
		);

		//	Fill in the input fields before submit
		fireEvent.change(screen.getByPlaceholderText("Firstname"), {
			target: { value: "José-Pierre" },
		});

		fireEvent.change(screen.getByPlaceholderText("Lastname"), {
			target: { value: "De La Motte-Picquet" },
		});

		fireEvent.change(screen.getByPlaceholderText("Birth Date"), {
			target: { value: "1985-08-01" },
		});

		fireEvent.change(screen.getByPlaceholderText("Street"), {
			target: { value: "2, Rue Marcel-Cerdan" },
		});

		fireEvent.change(screen.getByPlaceholderText("City"), {
			target: { value: "Valparaiso" },
		});

		// Specific for select
		userEvent.selectOptions(
			screen.getByTestId("select-state"),
			screen.getByRole("option", { name: "Arizona" })
		);
		expect(screen.getByRole("option", { name: "Arizona" }).selected).toBe(true);

		fireEvent.change(screen.getByPlaceholderText("Zip Code"), {
			target: { value: "01234" },
		});

		fireEvent.change(screen.getByPlaceholderText("Start Date"), {
			target: { value: "2015-07-18" },
		});

		// Specific for select
		userEvent.selectOptions(
			screen.getByTestId("select-department"),
			screen.getByRole("option", { name: "Engineering" })
		);
		expect(screen.getByRole("option", { name: "Engineering" }).selected).toBe(true);

		fireEvent.submit(screen.getByText("Submit"));

		expect(screen.getByText("Employee successfully created !")).toBeInTheDocument();
	});

});
