import { saveLocalStorage, restoreLocalStorage } from "cypress-localstorage-commands";

describe('List Employees Page must', () => {

  beforeEach(() => {
		cy.visit('https://sparkling-elf-38d7d4.netlify.app/list');
	});

  it('be reachable with the title', () => {
    cy.get('.p-3').should('contain.text', 'List Employees')
  })

  it('allow populate list of employees from file', () => {
    cy.get('.populateBtn').click()
    cy.get('.sc-hLBbgP').should('contain.text', 'Populate successfully done !')
    cy.get('.sc-bcXHqe').click()
    cy.saveLocalStorage()
  })
})


describe('List Employees Page must also', () => {

  beforeEach(() => {
    cy.restoreLocalStorage()
		cy.visit("https://sparkling-elf-38d7d4.netlify.app/list");
	});

  it('give the number of records i.e. the number of employees', () => {
    cy.get(".form-control").invoke("attr", "placeholder").should("contain", "50 records...");
  });

  it('search and find a firstname', () => {
    cy.get('.form-control').type("Broddie");
    cy.get('tbody > tr > :nth-child(1)').should("contain", "Broddie");
  });

  it('search and find a lastname', () => {
    cy.get('.form-control').type("Teffrey");
    cy.get('tbody > tr > :nth-child(2)').should("contain", "Teffrey");
  });

  it('search and find a birthdate', () => {
    cy.get('.form-control').type("1960-02-08");
    cy.get('tbody > tr > :nth-child(3)').should("contain", "1960-02-08");
  });

  it('search and find a street name', () => {
    cy.get('.form-control').type("Oak Valley");
    cy.get('tbody > tr > :nth-child(4)').should("contain", "Oak Valley");
  });

  it('search and find a street name', () => {
    cy.get('.form-control').type("Corpus Christi");
    cy.get('tbody > tr > :nth-child(5)').should("contain", "Corpus Christi");
  });

  it('search and find a zip code', () => {
    cy.get('.form-control').type("94616");
    cy.get('tbody > tr > :nth-child(7)').should("contain", "94616");
  });

  it('search and find a department', () => {
    cy.get('.form-control').type("Marketing");
    cy.get('tbody > tr > :nth-child(8)').should("contain", "Marketing");
  });

  it('search and find a start date', () => {
    cy.get('.form-control').type("1978-01-17");
    cy.get('tbody > tr > :nth-child(9)').should("contain", "1978-01-17");
  });

})

describe('List Employees Page must also', () => {

  beforeEach(() => {
    cy.restoreLocalStorage()
		cy.visit("https://sparkling-elf-38d7d4.netlify.app/list");
	});

  it('give possibility to toggel columns', () => {
    cy.get('.customBtn').click()
    cy.get(':nth-child(10) > input').click()
    cy.get('.customBtn').click()
    cy.get('.main-row').should('not.contain.text', 'Employee Identity')
  });



})
