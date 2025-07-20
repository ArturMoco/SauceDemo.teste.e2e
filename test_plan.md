# 🧪 Test Plan — SauceDemo E2E Project

This document defines the test strategy, scope, objectives, tools, and risks associated with the end-to-end automation project for [https://www.saucedemo.com](https://www.saucedemo.com).

---

## 📌 1. Objective

Ensure that core user flows of the SauceDemo e-commerce application function correctly by automating realistic end-to-end scenarios with Cypress.

---

## 🧭 2. Scope

### In Scope
- Login with valid and invalid credentials
- Product sorting (price: low to high)
- Add product to cart
- Remove product from cart
- Complete checkout flow with user data

### Out of Scope
- Cross-browser testing
- Mobile responsiveness
- Visual regression testing

---

## 🧠 3. Tools & Stack

| Category            | Tool/Technology       |
|--------------------|------------------------|
| Automation         | Cypress                |
| CI/CD              | Jenkins                |
| Containerization   | Docker                 |
| Reporting          | Allure Reports         |
| Communication      | Slack (Webhook)        |
| Test Design        | Gherkin (Cucumber-style) |
| Assertions         | Chai + Cypress built-ins |

---

## ✅ 4. Test Criteria

### Entry Criteria
- Project dependencies installed (`npm install`)
- Application accessible via baseUrl
- `.env.qa` or config file populated with credentials

### Exit Criteria
- All 6 test cases pass on local and Docker
- Allure report is generated successfully
- Slack notification sent after CI run
- Screenshots and video evidence stored

---

## 📋 5. Test Types

| Type            | Description                          |
|----------------|--------------------------------------|
| Functional      | Validate UI elements and workflows   |
| Negative        | Test rejection flows and errors      |
| E2E             | Simulate full real-user interaction  |

---

## 🧪 6. Test Data

Stored under `cypress/fixtures/`:
```json
{
  "validUser": {
    "username": "standard_user",
    "password": "secret_sauce"
  },
  "invalidUser": {
    "username": "locked_out_user",
    "password": "wrong_password"
  }
}
```

Used in login and checkout flows via `Cypress.env()` or direct `fixture` access.

---

## 📂 7. Structure Mapping

| Feature | Spec File                  | Scenario ID |
|---------|----------------------------|--------------|
| Login   | login.cy.js                | TC01, TC02   |
| Sorting | product-sorting.cy.js      | TC03         |
| Cart    | cart-add.cy.js             | TC04         |
| Cart    | cart-remove.cy.js          | TC05         |
| Checkout| checkout-flow.cy.js        | TC06         |

---

## ⚠️ 8. Risks & Mitigation

| Risk                                    | Mitigation                                     |
|----------------------------------------|------------------------------------------------|
| Element not visible (timing issue)     | Use `.should('be.visible')` + scrollIntoView   |
| Flaky tests in CI                      | Run with retries enabled (Cypress default)     |
| Site instability or rate-limiting      | Run in Docker for isolation                    |
| Selector changes on site               | Use `[data-test=]` attributes only             |

---

## 🧾 9. Evidence & Reporting

- **Screenshots** → Automatic on failure + manual evidence
- **Videos** → Recorded by Cypress per spec
- **Allure HTML** → Generated with `npm run allure:generate`
- **Slack Notification** → Triggered at end of CI pipeline

---

## 👤 Author

**Artur Felipe Albuquerque Portela**  
🗓️ July 2025 | QA Engineer — Portugal

> This test plan is part of a professional automation project following QA standards in E2E validation, CI/CD, and real-user simulation.

