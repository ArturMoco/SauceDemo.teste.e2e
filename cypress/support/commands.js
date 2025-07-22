Cypress.Commands.add('login', () => {
  const username = Cypress.env('USERNAME');
  const password = Cypress.env('PASSWORD');

  if (!username || !password) {
    throw new Error('USERNAME or PASSWORD not defined in Cypress.env');
  }

  cy.visit('/');
  cy.get('[data-test="username"]').scrollIntoView().type(username);
  cy.get('[data-test="password"]').scrollIntoView().type(password);
  cy.get('[data-test="login-button"]').scrollIntoView().click();
});


Cypress.Commands.add('addToCart', (selector) => {
  cy.get(selector, { timeout: 8000 })
    .should('exist')
    .scrollIntoView()
    .click();
});

Cypress.Commands.add('preencherCheckout', (nome, sobrenome, cep) => {
  cy.get('[data-test="firstName"]').scrollIntoView().type(nome);
  cy.get('[data-test="lastName"]').scrollIntoView().type(sobrenome);
  cy.get('[data-test="postalCode"]').scrollIntoView().type(cep);
});

import { faker } from '@faker-js/faker';

Cypress.Commands.add('fillRandomCheckoutForm', () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const postalCode = faker.location.zipCode('####-###');

  cy.get('[data-test=firstName]').scrollIntoView().type(firstName);
  cy.get('[data-test=lastName]').scrollIntoView().type(lastName);
  cy.get('[data-test=postalCode]').scrollIntoView().type(postalCode);
});


