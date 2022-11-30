export default function checkForm(data) {
	console.log("checkForm");
	const dateToday = new Date();

	// Birth date must be at least 15 years behind
	const validBirthDate = (text) => {
		const yearToday = dateToday.getFullYear();
		const yearGiven = text.slice(0, 4);
		console.log("validBirthDate: ", yearToday, yearGiven);
		return yearToday < yearGiven ? false : yearToday - yearGiven > 14 ? true : false;
	};

	// Start date must be at least 15 years after birthDate
	const validStartDate = (text, birthDate) => {
		const yearBirthDate = birthDate.slice(0, 4);
		const yearGiven = text.slice(0, 4);
		console.log("validStartDate: ", yearBirthDate, yearGiven);
		return yearGiven < yearBirthDate ? false : yearGiven - yearBirthDate > 14 ? true : false;
	};

	/**
	 * Main function to review date input values
	 *
	 * @return  string
	 *            'OK' if no error
	 *             specific message if error
	 *  */
	if (!validBirthDate(data.birthdate)) {
		console.log("birthdate");
		return "Birth date must be at least 15 years behind";
	}

	if (!validStartDate(data.startdate, data.birthdate)) {
		console.log("startDate");
		return "Start date must be consistent with birth date";
	}

	return "Employee successfully created !";
}
