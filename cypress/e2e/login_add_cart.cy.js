/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('E2E Test - SauceDemo Full Purchase Flow', () => {
  it('Should login, add 3 items to cart and complete checkout', () => {
    cy.login();

    cy.addToCart('[data-test="add-to-cart-sauce-labs-backpack"]');
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 1);
    cy.screenshot('1-item-in-cart');

    cy.get('[data-test="continue-shopping"]').click();

    cy.addToCart('[data-test="add-to-cart-sauce-labs-bike-light"]');
    cy.wait(300); 
    cy.addToCart('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');

    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 3);
    cy.screenshot('3-items-in-cart');

    cy.get('[data-test="checkout"]').scrollIntoView().click();
    cy.url().should('include', '/checkout-step-one');
    cy.screenshot('checkout-step-one');

    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const cep = faker.location.zipCode('####');

    cy.get('[data-test="firstName"]').type(nome);
    cy.get('[data-test="lastName"]').type(sobrenome);
    cy.get('[data-test="postalCode"]').type(cep);

    cy.get('[data-test="continue"]').scrollIntoView().click();
    cy.url().should('include', '/checkout-step-two');

    cy.get('[data-test="finish"]').scrollIntoView().click();
    cy.url().should('include', '/checkout-complete');

    cy.get('.complete-header').should('contain', 'Thank you for your order!');
    cy.screenshot('order-complete');
  });
});
