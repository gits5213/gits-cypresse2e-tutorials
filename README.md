## Pre-requirment
- Install NodeJS
- Install Java
- Install VS Code

## Install Cypress
- npm install cypress --save-dev

## Executing test via test runner 
-  npx open cypress 

## Executing test via script block 
- npm run cy:open


## Generatge Allre Report - ypress-allure-plugin Instructions
- Install >  npm i -D @shelex/cypress-allure-plugin
- Use defineConfig and setupNodeEvents inside config.js\config.ts files:
```
    const allureWriter = require('@shelex/cypress-allure-plugin/writer');
    // import allureWriter from "@shelex/cypress-allure-plugin/writer";

    module.exports = defineConfig({
        e2e: {
            setupNodeEvents(on, config) {
                allureWriter(on, config);
                return config;
            }
        }
    });
```
- Register commands in cypress/support/e2e.js file:
```
    import '@shelex/cypress-allure-plugin';
```

- > npm run report

## Report added