describe('Application validation', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com')
  })

  it('validate, ab testing is clickable', () => {
    cy.get('li:nth-of-type(1) > a').click();
  })
})
