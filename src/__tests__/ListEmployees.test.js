import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import ListEmployees from "../pages/ListEmployees";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ListEmployees", () => {
	test("Should render without crash and display table", async () => {
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

  test("Should render without crash and search, select Col menu & close", async () => {
		render(
			<Provider store={store}>
				<Router>
					<ListEmployees />
				</Router>
			</Provider>
		);
    expect(screen.getByRole("heading", { level: 1, text: "List Employees" })).toBeTruthy();

    fireEvent.change(screen.getByRole("textbox", { Name: "" }), {
			target: { value: "Petty" },
		});
    fireEvent.change(screen.getByRole("textbox", { Name: "" }), {
			target: { value: "" },
		})

    fireEvent.click(screen.getByText("COL"));
		fireEvent.click(screen.getByText("firstname"));
		fireEvent.click(screen.getByText("X"));

		fireEvent.click(screen.getByText("COL"));
    fireEvent.click(screen.getByText("Employee Identity"));

    fireEvent.click(screen.getByRole("button", { name: "Pop" } ));
    fireEvent.click(screen.getByRole("button", { name: "OK" } ));

    // Specific for select
		userEvent.selectOptions(
			screen.getByDisplayValue("10 entries"),
			screen.getByRole("option", { name: "25 entries" })
		);
		expect(screen.getByRole("option", { name: "25 entries" }).selected).toBe(true);

    fireEvent.click(screen.getByRole("button", { name: ">" } ));
    fireEvent.click(screen.getByRole("button", { name: "<" } ));
    fireEvent.click(screen.getByRole("button", { name: ">>" } ));
    fireEvent.click(screen.getByRole("button", { name: "<<" } ));

  })

  test("Should render without crash and sort table columns", async () => {
		render(
			<Provider store={store}>
				<Router>
					<ListEmployees />
				</Router>
			</Provider>
		);
    expect(screen.getByRole("heading", { level: 1, text: "List Employees" })).toBeTruthy();
		
    fireEvent.click(screen.getAllByRole("columnheader", { name: "Toggle SortBy" } )[0]);
		expect(screen.getByText("▲")).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("columnheader", { name: "Toggle SortBy" } )[0]);
  })
});