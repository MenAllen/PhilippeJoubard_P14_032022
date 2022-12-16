describe('Home Page must', () => {

  it('be reachable', () => {
    cy.visit('https://sparkling-elf-38d7d4.netlify.app/')
  })

  it('show Wealth Health Logo', () => {
    cy.visit('https://sparkling-elf-38d7d4.netlify.app/')
    cy.get('.card-img-top').should('have.attr', 'alt', 'logo wealth health') 
  })

  it('navigate to Create Employee Page', () => {
    cy.visit('https://sparkling-elf-38d7d4.netlify.app/')
    cy.get('[href="/create"]').click()
    cy.get('.p-3').should('contain.text', 'Create Employee')
  })

  it('navigate to List Employees Page', () => {
    cy.visit('https://sparkling-elf-38d7d4.netlify.app/')
    cy.get('[href="/list"]').click()
    cy.get('.p-3').should('contain.text', 'List Employees')
  })

  it('navigate back to Home Page', () => {
    cy.visit('https://sparkling-elf-38d7d4.netlify.app/list')
    cy.get('.d-inline-block').click()
    cy.get('.card-title').should('contain.text', 'HRnet')
  })

})