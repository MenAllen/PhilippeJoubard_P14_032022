export const COLUMNS = [
	{
		// first group - Identity
		Header: "Employee Identity",
    // First group columns
		columns: [
			{ 
				Header: "First Name",
				accessor: "firstname",
			},
			{
				Header: "Last Name",
				accessor: "lastname",
			},
			{
				Header: "Birth Date",
				accessor: "birthdate",
			},
		],
//    sticky: "left",
	},
	{
		// Second group - Location
		Header: "Location",
		// Second group columns
		columns: [
			{
				Header: "Street",
				accessor: "street",
			},
			{
				Header: "City",
				accessor: "city",
			},
			{
				Header: "State",
				accessor: "state",
			},
			{
				Header: "Zip Code",
				accessor: "zipcode",
			},
		],
	},
	{
		// Third group - Info
		Header: "Information",
		// Third group columns
		columns: [
			{
				Header: "Department",
				accessor: "department",
			},
			{
				Header: "Start Date",
				accessor: "startdate",
			},
		],
	},
];
