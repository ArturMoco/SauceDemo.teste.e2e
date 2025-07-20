/// <reference types="cypress" />

describe('Product Sorting', () => {
  beforeEach(() => {
    cy.login();
    cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
  });

  it('should sort products by price from low to high', () => {
    cy.get('[data-test=product-sort-container]')
      .select('lohi');

    cy.get('.inventory_item_price').then(($prices) => {
      const priceValues = [...$prices].map(el =>
        parseFloat(el.innerText.replace('$', ''))
      );
      const sortedPrices = [...priceValues].sort((a, b) => a - b);
      expect(priceValues).to.deep.equal(sortedPrices);
    });

    cy.screenshot('sorted-low-to-high');
  });
});
