export default function checkForm (data) {
	console.log("checkForm");
	const dateToday = new Date();

	// Text min must be minimum 2 chars long, maximum 50
	const validName = (text) => {
		return (text.length < 2 ? false : ( text.length < 51 ) ? true : false);
	};

	// Birth date must be at least 15 years behind
	const validBirthDate = (text) => {
		const yearToday = dateToday.getFullYear();
		const yearGiven = text.slice(0, 4);
		console.log("validBirthDate: ", yearToday, yearGiven);
		return (yearToday < yearGiven ? false : yearToday - yearGiven > 14 ? true : false);
	};

	// Start date must be at least 15 years after birthDate
	const validStartDate = (text, birthDate) => {
		const yearBirthDate = birthDate.slice(0, 4);
		const yearGiven = text.slice(0, 4);
		console.log("validStartDate: ", yearBirthDate, yearGiven);
		return (yearGiven < yearBirthDate ? false : yearGiven - yearBirthDate > 14 ? true : false);
	};

	// Zip Code must be a five digit number
	const validZipCode = (text) => {
		return text.match(/^\d{5}$/) ? true : false;
	};


	/**
	 * Main function to review each input value
	 *
	 * @return  string
	 *            'OK' if no error
	 *             specific message if error
	 *  */

	if (!validName(data.firstname)) {
		console.log("firstName");
		return "min two max 50 characters required for firstName";
	}

	if (!validName(data.lastname)) {
		console.log("lastName");
		return "min two max 50 characters required for lastName";
	}

	if (!validBirthDate(data.birthdate)) {
		console.log("birthdate");
		return "Birth date must be at least 15 years behind";
	}

  if (!validName(data.street)) {
		console.log("street");
		return "min two max 50 characters required for Street";
	}

  if (!validName(data.city)) {
		console.log("city");
		return "min two max 50 characters required for City";
	}
  
	if (!validZipCode(data.zipcode)) {
		console.log("zipcode");
		return "Zip Code must be 5 digit number";
	}

	if (!validStartDate(data.startdate, data.birthdate)) {
		console.log("startDate");
		return "Start date must be consistent with birth date";
	}

	return "Employee successfully created !";
};
