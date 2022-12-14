import { render, screen } from "@testing-library/react";
import App from "../App";


describe("App", () => {
	test("should render without crash", () => {
		render(<App />);
		const linkElement = screen.getByText("HRnet");
		expect(linkElement).toBeInTheDocument();
	});
});
