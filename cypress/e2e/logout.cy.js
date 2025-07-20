/// <reference types="cypress" />

describe('Logout Flow', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should logout and return to login page', () => {
    cy.get('#react-burger-menu-btn').click();

    cy.get('#logout_sidebar_link')
      .should('be.visible')
      .click();

    cy.url().should('eq', Cypress.config('baseUrl') + '/');
    cy.get('[data-test=login-button]').should('be.visible');
    cy.screenshot('logout-success');
  });
});
