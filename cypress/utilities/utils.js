/* global cy */

const utils = {

    visit: url => {
        cy.visit(url);
    },

    clickOnElement: locator => {
        cy.get(locator).click();
    },

    verifyTextContains: (locator, text) => {
        cy.get(locator).contains(text)
    },

    verifyLinkValues: (locator, haveAttr, href, linkValue) => {
        cy.get(locator).should(haveAttr, href, linkValue);
    }
    /*
    name: Deploy Nightly
on:
  schedule:
    - cron: '0 2 * * *' # run at 2 AM UTC

    */
}
module.exports = utils;