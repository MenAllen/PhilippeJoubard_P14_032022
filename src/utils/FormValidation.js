/**
 * checkForm is a function that checks the consistency of form input data for the dates entered
 *
 * @returns A string defining the conclusion of the data validation performed:
 * 					"Birth date must be at least 15 years behind": birth date not consistent
 * 					"Start date must be at least 15 years after birthDate": birth date ok but start date not consistent with birth date
 * 					"Employee successfully created !" validation is successfully done
 */
export default function checkForm(data) {
	const dateToday = new Date();

	// Birth date must be at least 15 years behind
	const validBirthDate = (text) => {
		const yearToday = dateToday.getFullYear();
		const yearGiven = text.slice(0, 4);
		return yearToday < yearGiven ? false : yearToday - yearGiven > 14 ? true : false;
	};

	// Start date must be at least 15 years after birthDate
	const validStartDate = (text, birthDate) => {
		const yearBirthDate = birthDate.slice(0, 4);
		const yearGiven = text.slice(0, 4);
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
		return "Birth date must be at least 15 years behind";
	}

	if (!validStartDate(data.startdate, data.birthdate)) {
		return "Start date must be at least 15 years after birthDate";
	}

	return "Employee successfully created !";
}
