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

## Generating test report throught the CI/CD and deploying to github page
- Github account > Settings > Action > General > Scroll down > Workflow permission > Select Read and Write permission
- Github account > Actions > Select NodeJS build and test > Commit throgh the PR > Merge it
- Pull the latest code in local and start working on nodejs.js.yml file
- End of the nodejs.js.yml file add github page script for creating github page and deploy allure test report on the github page for that 
-  [Adding script end of the file](https://github.com/marketplace/actions/allure-report-with-history) 
- Remove "build" from this line "allure_results: build/allure-results"
- Push your code on the PR and merge it with master branch 
- Build should be trigger and it should successful 
- Github account > Settings > Pages > select gh-pages from the branch dropdown list and save it to the root
- Local machine add something and push it again 
- Validate, Build successful and test allure report deploy to the github page
