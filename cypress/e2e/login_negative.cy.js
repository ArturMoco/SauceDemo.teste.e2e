/// <reference types="cypress" />

describe('Negative Login Scenarios', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should show error for invalid username and password', () => {
    cy.get('[data-test=username]').type('wrong_user');
    cy.get('[data-test=password]').type('wrong_pass');
    cy.get('[data-test=login-button]').click();

    cy.get('[data-test=error]')
      .should('be.visible')
      .and('contain', 'Username and password do not match');
    
    cy.screenshot('login-invalid-credentials');
  });

  it('should show error when username is missing', () => {
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    cy.get('[data-test=error]')
      .should('be.visible')
      .and('contain', 'Username is required');

    cy.screenshot('login-missing-username');
  });

  it('should show error when password is missing', () => {
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=login-button]').click();

    cy.get('[data-test=error]')
      .should('be.visible')
      .and('contain', 'Password is required');

    cy.screenshot('login-missing-password');
  });
});
