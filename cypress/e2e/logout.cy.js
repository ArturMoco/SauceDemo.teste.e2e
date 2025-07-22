/// <reference types="cypress" />

describe('Logout Flow', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should logout and return to login page', () => {
    cy.logout();
  });
});
