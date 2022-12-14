import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
	test("Should render without crash", async () => {
		render(
			<Router>
				<Header />
			</Router>
		);
		
    const cardPicture = screen.getByRole('img')
    expect(cardPicture.src).toBe('http://localhost/LogoWh.webp')
		expect(screen.getByText("Home")).toBeTruthy();
		expect(screen.getByText("Create Employee")).toBeTruthy();
		expect(screen.getByText("List Employees")).toBeTruthy();
	});
});
