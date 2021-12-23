// postcode.api.spec.js created with Cypress
/// <reference types="cypress" />

describe('Server health check', () => {
  context('GET /health', () => {
    it('should return that the server health is ok', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/health'
      })
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.health).to.be.eq('ok');
          cy.log(JSON.stringify(response.body));
        });
    });
  });
});