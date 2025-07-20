/// <reference types="cypress" />

describe('Remove product from cart', () => {
  beforeEach(() => {
    cy.login();

    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();

    cy.get('.shopping_cart_link').click();
  });

  it('should remove one product and keep the other in cart', () => {
    cy.get('[data-test=remove-sauce-labs-backpack]').click();

    cy.get('.cart_item')
      .should('have.length', 1)
      .and('contain', 'Sauce Labs Bike Light');

    cy.screenshot('remove-from-cart-success');
  });
});
