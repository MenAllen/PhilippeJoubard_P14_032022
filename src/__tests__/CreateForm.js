import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import CreateForm from "../components/CreateForm/CreateForm";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("CreateForm", () => {
	test("Should render without crash and display heading as well as submit & reset button", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateForm />
				</Router>
			</Provider>
		);
		const element = screen.getByRole("heading", { level: 1, text: "Create Employees" });
		expect(element).toBeInTheDocument();

		expect(screen.getByText("Submit")).toBeInTheDocument();
	});

	test("Should render without crash and call handleSubmit on click with invalid inputs", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateForm />
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
					<CreateForm />
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
					<CreateForm />
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

	test("Should render without crash and call handleReset on click", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateForm />
				</Router>
			</Provider>
		);

		// Set a state
		userEvent.selectOptions(
			screen.getByTestId("select-state"),
			screen.getByRole("option", { name: "Arizona" })
		);
		expect(screen.getByRole("option", { name: "Arizona" }).selected).toBe(true);

		// Set a department
		userEvent.selectOptions(
			screen.getByTestId("select-department"),
			screen.getByRole("option", { name: "Engineering" })
		);
		expect(screen.getByRole("option", { name: "Engineering" }).selected).toBe(true);

		fireEvent.reset(screen.getByText("Reset"));

		// Check unselect state é department
		expect(screen.getAllByText("Select Department")[0]).toBeVisible();
		expect(screen.getAllByText("Select Department")[1]).toBeVisible();
		expect(screen.getAllByText("Select State")[0]).toBeVisible();
		expect(screen.getAllByText("Select State")[1]).toBeVisible();
	});
});
