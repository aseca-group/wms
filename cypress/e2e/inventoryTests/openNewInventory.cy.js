describe('template spec', () => {
  it('checks if new inventory opens', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Create Inventory').click()
    cy.contains('product id')

  })
})