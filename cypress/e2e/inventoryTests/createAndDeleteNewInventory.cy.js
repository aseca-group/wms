describe('template spec', () => {
  it('creates an inventory, tests its functionality, then deletes it', () => {
    cy.visit('http://localhost:3000')

    let productId;

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.productHeaderContainer > div > .createButton').click();
    cy.get('[name="text input"]').clear();
    cy.get('[name="text input"]').type('cypress test');
    cy.get('[name="number input"]').clear('1');
    cy.get('[name="number input"]').type('1000');
    cy.get('[name="create new product button"]').click();
    cy.get(':nth-child(9) > .productContainer > .dataContainer > :nth-child(1)').should('have.text', 'Product: cypress test');

    cy.contains('div', 'Product: cypress test').parent().within(() => {
      cy.get('.idContainer p').eq(1).invoke('text').then((text) => {
        // Guarda el texto del ID en la variable, eliminando cualquier espacio en blanco
        productId = text.trim();
        cy.log(`Product ID: ${productId}`);
      });
    }).then(() => {
      // Las acciones siguientes se ejecutarán solo después de obtener y guardar el productId
      cy.get('.inventoryHeaderContainer > div > .createButton').click();
      cy.get('.listContainers').click();
      cy.get('[name="product id"]').clear();
      cy.get('[name="product id"]').type(productId);
      cy.get('.listContainers').click();
      cy.get('[name="quantity"]').clear();
      cy.get('[name="quantity"]').type('50');
      cy.get('.buttonsBox > :nth-child(2)').click();
      cy.get(':nth-child(7) > .inventoryContainer > .dataContainer > :nth-child(1)').should('have.text', 'Product: cypress test');
      cy.get(':nth-child(7) > .inventoryContainer > .buttonsContainer > :nth-child(1) > .stockButton').click();
      cy.get('.listContainers').click();
      cy.get('input').clear();
      cy.get('input').type('50');
      cy.get('.buttonsBox > :nth-child(2)').click();
      cy.get(':nth-child(7) > .inventoryContainer > .buttonsContainer > :nth-child(2) > .stockButton').click();
      cy.get('.modifyModal').click();
      cy.get('input').clear();
      cy.get('input').type('50');
      cy.get('.buttonsBox > :nth-child(2)').click();
      cy.get(':nth-child(7) > .inventoryContainer > .buttonsContainer > :nth-child(3) > .deleteButton').click();
      cy.get('.buttonsBox > .deleteButton').click();
      cy.get(':nth-child(9) > .productContainer > .dataContainer > :nth-child(1)').should('have.text', 'Product: cypress test');
      cy.get(':nth-child(9) > .productContainer > .dataContainer > div > .deleteButton').click();
      cy.get('.buttonsBox > .deleteButton').click();
    });
    /* ==== End Cypress Studio ==== */
  });
});