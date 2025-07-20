#!/bin/sh

# Run Cypress tests and generate Allure report
npm run test && npm run allure:generate
