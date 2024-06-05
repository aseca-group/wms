describe('template spec', () => {
  it('checks if we can create a product and then delete it', () => {
    cy.visit('http://localhost:3000')

    /* ==== Generated with Cypress Studio ==== */
    cy.contains('Create Product').click()
    cy.get('input[name="text input"]').clear()
    cy.get('input[name="text input"]').type('cypress test')
    cy.get('input[name="number input"]').clear()
    cy.get('input[name="number input"]').type('1000')
    cy.get('button[name="create new product button"]').click()
    cy.contains('div', 'Product: cypress test').within(() => {
      // Encuentra y haz clic en el botón "Delete"
      cy.contains('Delete').click();
      cy.contains('Delete product').click();
    });
    cy.get('body').should('not.contain', 'Product: cypress test');
    /* ==== End Cypress Studio ==== */
  })
})