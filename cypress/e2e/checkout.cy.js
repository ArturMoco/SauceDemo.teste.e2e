/// <reference types="cypress" />

describe('Checkout flow', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should complete a checkout with random valid data', () => {
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').scrollIntoView().click();

    cy.get('.shopping_cart_link').click();
    cy.get('[data-test=checkout]').click();

    cy.fillRandomCheckoutForm();

    cy.get('[data-test=continue]').click();
    cy.get('[data-test=finish]').scrollIntoView().click();

    cy.contains('Thank you for your order!').should('be.visible');

    cy.screenshot('checkout-success');
  });
});
