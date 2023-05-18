describe('API end point assertions', () => {
  
    it('fetch list of users', () => {
      cy.request({
        method: 'GET',
        url: `https://reqres.in/api/users?page=2`,
        failOnStatusCode: false,
      }).as('details');
      cy.get('@details').its('status').should('eq', 200);
    });
  })