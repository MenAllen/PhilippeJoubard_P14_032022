import { saveLocalStorage, restoreLocalStorage } from "cypress-localstorage-commands";

describe("List Employees Page must", () => {
	beforeEach(() => {
		cy.visit("https://sparkling-elf-38d7d4.netlify.app/list");
	});

	it("be reachable with the title", () => {
		cy.get(".p-3").should("contain.text", "List Employees");
	});

	it("allow populate list of employees from file", () => {
		cy.get(".populateBtn").click();
		cy.get(".sc-hLBbgP").should("contain.text", "Populate successfully done !");
		cy.get(".sc-bcXHqe").click();
		cy.saveLocalStorage();
	});
});

describe("List Employees Page must also", () => {
	beforeEach(() => {
		cy.restoreLocalStorage();
		cy.visit("https://sparkling-elf-38d7d4.netlify.app/list");
	});

	it("give the number of records i.e. the number of employees", () => {
		cy.get(".form-control").invoke("attr", "placeholder").should("contain", "50 records...");
	});

	it("search and find a firstname", () => {
		cy.get(".form-control").type("Broddie");
		cy.get("tbody > tr > :nth-child(1)").should("contain", "Broddie");
	});

	it("search and find a lastname", () => {
		cy.get(".form-control").type("Teffrey");
		cy.get("tbody > tr > :nth-child(2)").should("contain", "Teffrey");
	});

	it("search and find a birthdate", () => {
		cy.get(".form-control").type("1960-02-08");
		cy.get("tbody > tr > :nth-child(3)").should("contain", "1960-02-08");
	});

	it("search and find a street name", () => {
		cy.get(".form-control").type("Oak Valley");
		cy.get("tbody > tr > :nth-child(4)").should("contain", "Oak Valley");
	});

	it("search and find a street name", () => {
		cy.get(".form-control").type("Corpus Christi");
		cy.get("tbody > tr > :nth-child(5)").should("contain", "Corpus Christi");
	});

	it("search and find a zip code", () => {
		cy.get(".form-control").type("94616");
		cy.get("tbody > tr > :nth-child(7)").should("contain", "94616");
	});

	it("search and find a department", () => {
		cy.get(".form-control").type("Marketing");
		cy.get("tbody > tr > :nth-child(8)").should("contain", "Marketing");
	});

	it("search and find a start date", () => {
		cy.get(".form-control").type("1978-01-17");
		cy.get("tbody > tr > :nth-child(9)").should("contain", "1978-01-17");
	});
});

describe("List Employees Page must also", () => {
	beforeEach(() => {
		cy.restoreLocalStorage();
		cy.visit("https://sparkling-elf-38d7d4.netlify.app/list");
	});

  it("give possibility to toggle columns", () => {
		cy.get(".customBtn").click();
		cy.get(':nth-child(1) > label > .checkbox').click();
		cy.get('.customBtn').click();
		cy.get(".main-row").should("not.contain.text", "First Name");

    cy.get(".customBtn").click();
		cy.get(':nth-child(2) > label > .checkbox').click();
		cy.get('.customBtn').click();
		cy.get(".main-row").should("not.contain.text", "Last Name");

    cy.get(".customBtn").click();
		cy.get(':nth-child(3) > label > .checkbox').click();
    cy.get('.customBtn').click();
		cy.get(".main-row").should("not.contain.text", "Birth Date");

    cy.get(".customBtn").click();
		cy.get(':nth-child(4) > label > .checkbox').click();
		cy.get('.customBtn').click();
		cy.get(".main-row").should("not.contain.text", "Street");

    cy.get(".customBtn").click();
		cy.get(':nth-child(5) > label > .checkbox').click();
		cy.get('.customBtn').click();
		cy.get(".main-row").should("not.contain.text", "City");

    cy.get(".customBtn").click();
		cy.get(':nth-child(6) > label > .checkbox').click();
		cy.get('.customBtn').click();
		cy.get(".main-row").should("not.contain.text", "State");

    cy.get(".customBtn").click();
		cy.get(':nth-child(7) > label > .checkbox').click();
		cy.get('.customBtn').click();
		cy.get(".main-row").should("not.contain.text", "Zip Code");

    cy.get(".customBtn").click();
		cy.get(':nth-child(8) > label > .checkbox').click();
		cy.get('.customBtn').click();
		cy.get(".main-row").should("not.contain.text", "Department");

    cy.get(".customBtn").click();
		cy.get(':nth-child(9) > label > .checkbox').click();
		cy.get('.customBtn').click();
		cy.get(".main-row").should("not.contain.text", "Start Date");

 		cy.get(".customBtn").click();
		cy.get(":nth-child(10) > input").click();
		cy.get(".customBtn").click();
		cy.get(".main-row").should("contain.text", "Employee Identity");
	});

	it("give possibility to navigate in the pages: >, >>, <, <<", () => {
		cy.get(".d-inline-flex > :nth-child(1) > :nth-child(3)").click();
		cy.get("span > :nth-child(2)").should("contain.text", "2 of 5");

		cy.get(".d-inline-flex > :nth-child(1) > :nth-child(4)").click();
		cy.get("span > :nth-child(2)").should("contain.text", "5 of 5");

		cy.get(
			".main-row > .align-items-center > .d-inline-flex > :nth-child(1) > :nth-child(2)"
		).click();
		cy.get("span > :nth-child(2)").should("contain.text", "4 of 5");

		cy.get(
			".main-row > .align-items-center > .d-inline-flex > :nth-child(1) > :nth-child(1)"
		).click();
		cy.get("span > :nth-child(2)").should("contain.text", "1 of 5");
	});

	describe("List Employees Page must also", () => {
		beforeEach(() => {
			cy.restoreLocalStorage();
			cy.visit("https://sparkling-elf-38d7d4.netlify.app/list");
		});

		it("give possibility to sort First Name colmun", () => {
      let Firstname = cy.get('tbody > :nth-child(1) > :nth-child(1)');
			cy.get("thead > :nth-child(2) > :nth-child(1)").click();
			cy.get("thead > :nth-child(2) > :nth-child(1)").should("contain.text", "▲");
      cy.get("thead > :nth-child(2) > :nth-child(1)").should("not.contain.text", Firstname);

      Firstname = cy.get('tbody > :nth-child(1) > :nth-child(1)');
      cy.get("thead > :nth-child(2) > :nth-child(1)").click();
      cy.get("thead > :nth-child(2) > :nth-child(1)").should("contain.text", "▼");
      cy.get("thead > :nth-child(2) > :nth-child(1)").should("not.contain.text", Firstname);

      cy.get("thead > :nth-child(2) > :nth-child(1)").click();
		});

    it("give possibility to sort Last Name colmun", () => {
      let Lastname = cy.get('tbody > :nth-child(1) > :nth-child(2)');
			cy.get("thead > :nth-child(2) > :nth-child(2)").click();
			cy.get("thead > :nth-child(2) > :nth-child(2)").should("contain.text", "▲");
      cy.get("thead > :nth-child(2) > :nth-child(2)").should("not.contain.text", Lastname);

      Lastname = cy.get('tbody > :nth-child(1) > :nth-child(2)');
      cy.get("thead > :nth-child(2) > :nth-child(2)").click();
      cy.get("thead > :nth-child(2) > :nth-child(2)").should("contain.text", "▼");
      cy.get("thead > :nth-child(2) > :nth-child(2)").should("not.contain.text", Lastname);

      cy.get("thead > :nth-child(2) > :nth-child(2)").click();
		});

    it("give possibility to sort Birth Date Name colmun", () => {
      let Birthdate = cy.get('tbody > :nth-child(1) > :nth-child(3)');
			cy.get("thead > :nth-child(2) > :nth-child(3)").click();
			cy.get("thead > :nth-child(2) > :nth-child(3)").should("contain.text", "▲");
      cy.get("thead > :nth-child(2) > :nth-child(3)").should("not.contain.text", Birthdate);

      Birthdate = cy.get('tbody > :nth-child(1) > :nth-child(3)');
      cy.get("thead > :nth-child(2) > :nth-child(3)").click();
      cy.get("thead > :nth-child(2) > :nth-child(3)").should("contain.text", "▼");
      cy.get("thead > :nth-child(2) > :nth-child(3)").should("not.contain.text", Birthdate);

      cy.get("thead > :nth-child(2) > :nth-child(3)").click();
		});

    it("give possibility to sort Street colmun", () => {
      let Street = cy.get('tbody > :nth-child(1) > :nth-child(4)');
			cy.get("thead > :nth-child(2) > :nth-child(4)").click();
			cy.get("thead > :nth-child(2) > :nth-child(4)").should("contain.text", "▲");
      cy.get("thead > :nth-child(2) > :nth-child(4)").should("not.contain.text", Street);

      Street = cy.get('tbody > :nth-child(1) > :nth-child(4)');
      cy.get("thead > :nth-child(2) > :nth-child(4)").click();
      cy.get("thead > :nth-child(2) > :nth-child(4)").should("contain.text", "▼");
      cy.get("thead > :nth-child(2) > :nth-child(4)").should("not.contain.text", Street);

      cy.get("thead > :nth-child(2) > :nth-child(4)").click();
		});

    it("give possibility to sort City colmun", () => {
      let City = cy.get('tbody > :nth-child(1) > :nth-child(5)');
			cy.get("thead > :nth-child(2) > :nth-child(5)").click();
			cy.get("thead > :nth-child(2) > :nth-child(5)").should("contain.text", "▲");
      cy.get("thead > :nth-child(2) > :nth-child(5)").should("not.contain.text", City);

      City = cy.get('tbody > :nth-child(1) > :nth-child(5)');
      cy.get("thead > :nth-child(2) > :nth-child(5)").click();
      cy.get("thead > :nth-child(2) > :nth-child(5)").should("contain.text", "▼");
      cy.get("thead > :nth-child(2) > :nth-child(5)").should("not.contain.text", City);

      cy.get("thead > :nth-child(2) > :nth-child(5)").click();
		});

    it("give possibility to sort State colmun", () => {
      let State = cy.get('tbody > :nth-child(1) > :nth-child(6)');
			cy.get("thead > :nth-child(2) > :nth-child(6)").click();
			cy.get("thead > :nth-child(2) > :nth-child(6)").should("contain.text", "▲");
      cy.get("thead > :nth-child(2) > :nth-child(6)").should("not.contain.text", State);

      State = cy.get('tbody > :nth-child(1) > :nth-child(6)');
      cy.get("thead > :nth-child(2) > :nth-child(6)").click();
      cy.get("thead > :nth-child(2) > :nth-child(6)").should("contain.text", "▼");
      cy.get("thead > :nth-child(2) > :nth-child(6)").should("not.contain.text", State);

      cy.get("thead > :nth-child(2) > :nth-child(6)").click();
		});

    it("give possibility to sort Zip Code colmun", () => {
      let Zipcode = cy.get('tbody > :nth-child(1) > :nth-child(7)');
			cy.get("thead > :nth-child(2) > :nth-child(7)").click();
			cy.get("thead > :nth-child(2) > :nth-child(7)").should("contain.text", "▲");
      cy.get("thead > :nth-child(2) > :nth-child(7)").should("not.contain.text", Zipcode);

      Zipcode = cy.get('tbody > :nth-child(1) > :nth-child(7)');
      cy.get("thead > :nth-child(2) > :nth-child(7)").click();
      cy.get("thead > :nth-child(2) > :nth-child(7)").should("contain.text", "▼");
      cy.get("thead > :nth-child(2) > :nth-child(7)").should("not.contain.text", Zipcode);

      cy.get("thead > :nth-child(2) > :nth-child(7)").click();
		});

    it("give possibility to sort Department colmun", () => {
      let Department = cy.get('tbody > :nth-child(1) > :nth-child(8)');
			cy.get("thead > :nth-child(2) > :nth-child(8)").click();
			cy.get("thead > :nth-child(2) > :nth-child(8)").should("contain.text", "▲");
      cy.get("thead > :nth-child(2) > :nth-child(8)").should("not.contain.text", Department);

      Department = cy.get('tbody > :nth-child(1) > :nth-child(8)');
      cy.get("thead > :nth-child(2) > :nth-child(8)").click();
      cy.get("thead > :nth-child(2) > :nth-child(8)").should("contain.text", "▼");
      cy.get("thead > :nth-child(2) > :nth-child(8)").should("not.contain.text", Department);

      cy.get("thead > :nth-child(2) > :nth-child(8)").click();
		});

    it("give possibility to sort Start Date colmun", () => {
      let Startdate = cy.get('tbody > :nth-child(1) > :nth-child(9)');
			cy.get("thead > :nth-child(2) > :nth-child(9)").click();
			cy.get("thead > :nth-child(2) > :nth-child(9)").should("contain.text", "▲");
      cy.get("thead > :nth-child(2) > :nth-child(9)").should("not.contain.text", Startdate);

      Startdate = cy.get('tbody > :nth-child(1) > :nth-child(9)');
      cy.get("thead > :nth-child(2) > :nth-child(9)").click();
      cy.get("thead > :nth-child(2) > :nth-child(9)").should("contain.text", "▼");
      cy.get("thead > :nth-child(2) > :nth-child(9)").should("not.contain.text", Startdate);

      cy.get("thead > :nth-child(2) > :nth-child(9)").click();
		});

  });
});
