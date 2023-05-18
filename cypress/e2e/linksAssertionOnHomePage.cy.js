describe('Links assertion on the home page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com')
  })

  it('validate, link contains AB Testing', () => {
    cy.get('li:nth-of-type(1) > a').contains('A/B Testing');
    cy.get('li:nth-of-type(1) > a').should('have.attr', 'href', '/abtest');
    cy.get('li:nth-of-type(1) > a') 
      .should('have.attr', 'href')
      .and('equal', '/abtest');
  })
})
