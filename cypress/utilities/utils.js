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
}
module.exports = utils;