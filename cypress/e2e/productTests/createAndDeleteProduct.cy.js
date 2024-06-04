describe('template spec', () => {
  it('checks if we can create a product and then delete it', () => {
    cy.visit('http://localhost:3000')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.productHeaderContainer > div > .createButton').click();
    cy.get('.createModal').click();
    cy.get('[name="text input"]').clear();
    cy.get('[name="text input"]').type('cypress test');
    cy.get('.createModal').click();
    cy.get('[name="number input"]').clear();
    cy.get('[name="number input"]').type('1000');
    cy.get('[name="create new product button"]').click();
    cy.get(':nth-child(9) > .productContainer > .dataContainer > :nth-child(1)').should('have.text', 'Product: cypress test');
    cy.get(':nth-child(9) > .productContainer > .dataContainer > div > .deleteButton').click();
    cy.get('.buttonsBox > .deleteButton').click();
    /* ==== End Cypress Studio ==== */
  })
})