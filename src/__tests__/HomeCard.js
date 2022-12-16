import HomeCard from "../components/HomeCard/HomeCard";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("HomeCard", () => {
	test("Should render without crash", async () => {
		render(
				<HomeCard />
		);
    const cardPicture = screen.getByRole('img')
    expect(cardPicture.src).toBe('http://localhost/Logo.webp')

    const cardTitle = screen.getByText(/Human/i)
    expect(cardTitle.textContent).toBe('Human Resources Networking')

	});
});