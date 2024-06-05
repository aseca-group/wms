describe('template spec', () => {
  it('checks if new inventory opens', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Create Product').click()
    cy.contains('Enter the product name:')
  })
})