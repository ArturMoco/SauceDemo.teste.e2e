Feature: Complete purchase flow on SauceDemo

  As a registered user,
  I want to log in and purchase multiple products,
  So that I can confirm the complete checkout process works as expected.

  Scenario: Successfully logging in, adding 3 items to cart, and completing the order
    Given I open the SauceDemo login page
    When I enter valid credentials and click the login button
    And I add the "Sauce Labs Backpack" to the cart
    And I go to the cart page
    Then I should see 1 item in the cart

    When I click "Continue Shopping"
    And I add the "Sauce Labs Bike Light" to the cart
    And I add the "Sauce Labs Bolt T-Shirt" to the cart
    And I return to the cart page
    Then I should see 3 items in the cart

    When I proceed to checkout
    And I fill in the checkout information with valid first name, last name, and postal code
    And I continue to the final step
    And I click the "Finish" button
    Then I should see a confirmation message that says "Thank you for your order!"
