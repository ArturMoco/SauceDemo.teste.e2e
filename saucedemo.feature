Feature: Complete purchase flow on SauceDemo

  As a registered user,
  I want to perform common actions on the SauceDemo site,
  So that I can ensure the purchase flow and main functionalities are working.

  Scenario: Successful login
    Given I am on the SauceDemo login page
    When I enter a valid username and password
    And I click on "Login"
    Then I should see the products list

  Scenario: Login with invalid username and password
    Given I am on the SauceDemo login page
    When I enter an invalid username and password
    And I click on "Login"
    Then I should see an error message

  Scenario: Login without entering username
    Given I am on the SauceDemo login page
    When I leave the username field blank and enter a password
    And I click on "Login"
    Then I should see an error message

  Scenario: Add products to cart and complete checkout
    Given I am logged in to SauceDemo
    When I add 3 products to the cart
    And I go to the cart and start the checkout
    And I fill in the checkout form with valid information
    And I finish the purchase
    Then I should see the order confirmation message

  Scenario: Remove product from cart
    Given I am logged in to SauceDemo
    And I add two products to the cart
    When I remove one product from the cart
    Then the other product should remain in the cart

  Scenario: Sort products by price (low to high)
    Given I am logged in to SauceDemo
    When I sort the products from low to high price
    Then the products should be displayed in ascending price order

  Scenario: User logout
    Given I am logged in to SauceDemo
    When I log out
    Then I should be redirected to the login page