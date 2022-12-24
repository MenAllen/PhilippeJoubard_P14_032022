describe('Error Page must', () => {

  it('navigate to Error Page -> modal', () => {
    cy.visit('https://sparkling-elf-38d7d4.netlify.app/anyurl')
    cy.get('.sc-hLBbgP').should('contain.text', "Error ! Requested page doesn't exist")
    cy.get('.sc-gswNZR').click()
  })

})