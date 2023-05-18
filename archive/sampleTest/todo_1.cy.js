describe('Home page links contains text assertion', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com')
  })

  it('validate, link contains AB Testing', () => {
    cy.get('li:nth-of-type(1) > a').contains('A/B Testing');
    cy.get('li:nth-of-type(1) > a').should('have.attr', 'href', '/abtest');
    cy.get('li:nth-of-type(1) > a') 
      .should('have.attr', 'href')
      .and('equal', '/abtest');
    //cy.get('.nav').contains('About')
    //cy.get('nav').should('be.visible')s
    //.should('eq', 'bar')
    //.should('have.css', 'font-family')
  })
})
