describe('My First Test', () => {
  it('visits the wms page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Inventory').click()
    cy.contains('product id')
  })
})