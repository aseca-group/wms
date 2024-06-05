describe('template spec', () => {
  it('creates an inventory, tests its functionality, then deletes it', () => {
    cy.visit('http://localhost:3000')

    let productId;

    // Crear un nuevo producto
    cy.get('.productHeaderContainer > div > .createButton').click();
    cy.get('[name="text input"]').clear().type('cypress test');
    cy.get('[name="number input"]').clear().type('1000');
    cy.get('[name="create new product button"]').click();
    cy.contains('div', 'Product: cypress test').should('exist');

    // Obtener el ID del nuevo producto creado
    cy.contains('div', 'Product: cypress test').parent().within(() => {
      cy.get('.idContainer p').eq(1).invoke('text').then((text) => {
        productId = text.trim();
        cy.log(`Product ID: ${productId}`);
      });
    }).then(() => {
      // Crear un inventario para el nuevo producto usando el ID obtenido
      cy.get('.inventoryHeaderContainer > div > .createButton').click();
      cy.get('[name="product id"]').clear().type(productId);
      cy.get('[name="quantity"]').clear().type('50');
      cy.get('.buttonsBox > :nth-child(2)').click();
      cy.contains('.inventoryContainer .dataContainer', `Product: cypress test`).should('exist');

      // Verificar el stock inicial
      cy.contains('.inventoryContainer .dataContainer', `Product: cypress test`).within(() => {
        cy.contains('Stock: 50').should('exist');
      });


      // Agregar stock al inventario
      cy.contains('.inventoryContainer .dataContainer', `Product: cypress test`).parent().within(() => {
        cy.get('.stockButton').eq(0).click();
      });
      cy.get('input').clear().type('50');
      cy.get('.buttonsBox > :nth-child(2)').click();
      cy.wait(1000);

      // Verificar el nuevo valor de stock
      cy.contains('.inventoryContainer .dataContainer', `Product: cypress test`).within(() => {
        cy.contains('Stock: 100').should('exist');
      });

      // Remover stock del inventario
      cy.contains('.inventoryContainer .dataContainer', `Product: cypress test`).parent().within(() => {
        cy.get('.stockButton').eq(1).click();
      });
      cy.get('input').clear().type('50');
      cy.get('.buttonsBox > :nth-child(2)').click();

      // Verificar el valor de stock después de la eliminación
      cy.contains('.inventoryContainer .dataContainer', `Product: cypress test`).within(() => {
        cy.contains('Stock: 50').should('exist');
      });

      // Eliminar el inventario
      cy.contains('.inventoryContainer .dataContainer', `Product: cypress test`).parent().within(() => {
        cy.get('.deleteButton').click();
      });
      cy.get('.buttonsBox > .deleteButton').click();

      // Verificar y eliminar el producto creado
      cy.contains('.productContainer .dataContainer', 'Product: cypress test').should('exist').parent().within(() => {
        cy.get('.deleteButton').click();
      });
      cy.get('.buttonsBox > .deleteButton').click();
    });
  });
});