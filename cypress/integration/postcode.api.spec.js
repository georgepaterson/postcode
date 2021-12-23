// postcode.spec.js created with Cypress
/// <reference types="cypress" />

describe('Postcode check for UK', () => {
  context('GET /postcode/nw107ns', () => {
    it('should return that the postcode is supported in the UK', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/postcode/nw107ns'
      })
        .should((response) => {
          expect(response.status).to.eq(200);
          cy.log(JSON.stringify(response.body));
        });
    });
  });
  context('GET /postcode/uk/nw107ns', () => {
    it('should return that the postcode is supported in the UK', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/postcode/uk/nw107ns'
      })
        .should((response) => {
          expect(response.status).to.eq(200);
          cy.log(JSON.stringify(response.body));
        });
    });
  });
  context('GET /postcode/uk/zz149fr', () => {
    it('should return that the postcode is unsupported in the UK', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/postcode/uk/zz149fr'
      })
        .should((response) => {
          expect(response.status).to.eq(200);
          cy.log(JSON.stringify(response.body));
        });
    });
  });
  context('GET /postcode/zz/tn149fr', () => {
    it('should return that the country is invalid for appointments', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/postcode/zz/tn149fr'
      })
        .should((response) => {
          expect(response.status).to.eq(200);
          cy.log(JSON.stringify(response.body));
        });
    });
  });
});
