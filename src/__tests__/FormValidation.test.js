import checkForm from "../utils/FormValidation";
import '@testing-library/jest-dom';

describe("Given I am filling the form to create an employee", () => {
	// Birth date must be at least 15 years behind
	describe("When I enter a too recent birth date", () => {
		test("Then I should get this error message: Birth date must be at least 15 years behind", () => {
			const dates = { birthdate: "2010-01-07", startdate: "2021-07-03" };
			const result = checkForm(dates);
			expect(result).toBe("Birth date must be at least 15 years behind");
		});
	});

	// Start date must be at least 15 years after birth date
	describe("When I enter a too old start date date", () => {
		test("Then I should get this error message: Start date must be consistent with birth date", () => {
			const dates = { birthdate: "2000-01-07", startdate: "2011-07-03" };
			const result = checkForm(dates);
			expect(result).toBe("Start date must be at least 15 years after birthDate");
		});
	});

	// Start date & birth date are consistent
	describe("When I enter consistent dates", () => {
		test("Then I should get this successfull message: Employee successfully created !", () => {
			const dates = { birthdate: "2000-01-07", startdate: "2021-07-03" };
			const result = checkForm(dates);
			expect(result).toBe("Employee successfully created !");
		});
	});
});
