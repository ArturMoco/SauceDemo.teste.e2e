# ✅ Test Cases — SauceDemo E2E Cypress

This document defines the functional test cases for the SauceDemo platform, written in Gherkin syntax and mapped to Cypress code behavior.

Each test simulates a real user’s interaction with the platform, using accessible selectors and Cypress best practices.

---

## TC01 — Login with Valid Credentials

**Gherkin**

```gherkin
Feature: Login functionality
  Scenario: Login with valid credentials
    Given I am on the SauceDemo login page
    When I enter a valid username and password
    And I click the login button
    Then I should be redirected to the inventory page
```

**Cypress Steps**

```js
cy.visit('/')
cy.get('[data-test=username]').type(Cypress.env('USERNAME'))
cy.get('[data-test=password]').type(Cypress.env('PASSWORD'))
cy.get('[data-test=login-button]').click()
cy.url().should('include', '/inventory')
```

---

## TC02 — Login with Invalid Credentials

**Gherkin**

```gherkin
Feature: Login functionality
  Scenario: Login with invalid credentials
    Given I am on the login page
    When I enter incorrect credentials
    And I click the login button
    Then I should see an error message
```

**Cypress Steps**

```js
cy.visit('/')
cy.get('[data-test=username]').type('invalid_user')
cy.get('[data-test=password]').type('wrong_password')
cy.get('[data-test=login-button]').click()
cy.get('[data-test=error]').should('be.visible')
```

---

## TC03 — Sort Products by Price (Low to High)

**Gherkin**

```gherkin
Feature: Product sorting
  Scenario: Sort products by price from low to high
    Given I am logged in as a standard user
    When I sort products by price (low to high)
    Then I should see products ordered from cheapest to most expensive
```

**Cypress Steps**

```js
cy.login()
cy.get('[data-test=product-sort-container]').select('lohi')
cy.get('.inventory_item_price').then(($prices) => {
  const values = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')))
  const sorted = [...values].sort((a, b) => a - b)
  expect(values).to.deep.equal(sorted)
})
```

---

## TC04 — Add Product to Cart

**Gherkin**

```gherkin
Feature: Cart management
  Scenario: Add a product to the cart
    Given I am logged in
    When I click on "Add to cart" for a product
    Then the cart badge should show "1"
```

**Cypress Steps**

```js
cy.login()
cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
cy.get('.shopping_cart_badge').should('have.text', '1')
```

---

## TC05 — Remove Product from Cart

**Gherkin**

```gherkin
Feature: Cart management
  Scenario: Remove a product from the cart
    Given I have a product in the cart
    When I click on "Remove"
    Then the cart badge should not be visible
```

**Cypress Steps**

```js
cy.login()
cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
cy.get('[data-test=remove-sauce-labs-backpack]').click()
cy.get('.shopping_cart_badge').should('not.exist')
```

---

## TC06 — Complete Checkout Flow

**Gherkin**

```gherkin
Feature: Checkout process
  Scenario: Complete a product purchase
    Given I have a product in the cart
    When I proceed to checkout
    And I fill in the customer information
    And I finish the purchase
    Then I should see a confirmation message
```

**Cypress Steps**

```js
cy.login()
cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
cy.get('.shopping_cart_link').click()
cy.get('[data-test=checkout]').click()
cy.get('[data-test=firstName]').type('John')
cy.get('[data-test=lastName]').type('Doe')
cy.get('[data-test=postalCode]').type('12345')
cy.get('[data-test=continue]').click()
cy.get('[data-test=finish]').click()
cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER')
```

---

📌 All scenarios are covered by assertions, scrollIntoView where needed, no fixed waits, and complete evidence via screenshots and videos.

🧪 Each scenario is mapped to one `.cy.js` file under `cypress/e2e/`.

🧠 For detailed practices, refer to: [`Guia_Boas_Praticas_QA.md`](./Guia_Boas_Praticas_QA.md)

