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
	const yearToday = dateToday.getFullYear();
	const yearBirthDate = data.birthdate.slice(0, 4);
	const yearStartDate = data.startdate.slice(0, 4);
	let message = "";

	!(yearToday - yearBirthDate > 14)
		? (message = "Birth date must be at least 15 years behind")
		: !(yearStartDate - yearBirthDate > 14)
		? (message = "Start date must be at least 15 years after birthDate")
		: (message = "Employee successfully created !");

	return message;
}
