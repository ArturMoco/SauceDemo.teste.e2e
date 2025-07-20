# 👥 User Story — SauceDemo Checkout Flow

This document defines the user stories, priorities, and acceptance criteria covered by the SauceDemo E2E automation project.

---

## 📘 Epic

**As a** SauceDemo customer\
**I want to** complete a basic shopping journey from login to checkout\
**So that** I can validate the platform's critical buying functionality.

---

## 📋 User Stories & Acceptance Criteria

### 🔴 US01 — Login (Valid Credentials)

**Priority:** 10/10 (Critical)

```gherkin
Given I am on the login page
When I enter valid credentials
Then I should be redirected to the inventory page
```

### 🔴 US02 — Login (Invalid Credentials)

**Priority:** 9/10 (High)

```gherkin
Given I am on the login page
When I enter invalid credentials
Then I should see an error message indicating login failure
```

### 🟢 US03 — Sort Products by Price (Low to High)

**Priority:** 5/10 (Moderate)

```gherkin
Given I am on the product listing page
When I sort products by price from low to high
Then I should see products displayed in ascending price order
```

### 🟡 US04 — Add Product to Cart

**Priority:** 7/10 (High)

```gherkin
Given I am viewing a product
When I click the "Add to cart" button
Then the cart badge should display the correct item count
```

### 🟡 US05 — Remove Product from Cart

**Priority:** 6/10 (Above Average)

```gherkin
Given I have items in my cart
When I click the "Remove" button
Then the cart badge should be updated or removed accordingly
```

### 🔴 US06 — Complete Checkout

**Priority:** 10/10 (Critical)

```gherkin
Given I have items in my cart
When I proceed to checkout and fill in my personal information
Then I should see a confirmation message for successful purchase
```

---

## 🧠 Notes

- All user stories simulate realistic user behavior.
- Acceptance criteria are aligned with automated test cases.
- Each story maps directly to a Cypress test case (TC01 to TC06).

---

## 🔁 Reusability

This user story suite can be used for:

- QA onboarding and documentation
- Feature validation for stakeholders
- Expanding future test coverage (e.g. errors, roles, payments)

---

## 👤 Author

**Artur Felipe Albuquerque Portela**\
🗓️ July 2025 | QA Engineer — Portugal

