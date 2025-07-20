const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const dotenv = require('dotenv');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      allureWriter(on, config);

      const envName = config.env.configFile || 'dev';
      const envPath = `.env.${envName}`;

      if (fs.existsSync(envPath)) {
        const envVars = dotenv.config({ path: envPath }).parsed;
        Object.assign(config.env, envVars);
      }

      config.baseUrl = config.env.BASE_URL || 'https://www.saucedemo.com';

      return config;
    },

    video: true,
    screenshotOnRunFailure: true,
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js'
  },

  env: {
    allure: true
  }
});
