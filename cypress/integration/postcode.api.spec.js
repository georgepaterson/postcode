// postcode.api.spec.js created with Cypress
/// <reference types="cypress" />

describe('Postcode check for appointment availability', () => {
  context('GET /postcode/nw107ns', () => {
    it('should return that the postcode is supported for UK appointments', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/postcode/nw107ns'
      })
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.valid).to.be.eq(true);
          expect(response.body.description).to.be.eq('supported postcode for uk appointments');
          cy.log(JSON.stringify(response.body));
        });
    });
  });
  context('GET /postcode/uk/nw107ns', () => {
    it('should return that the postcode is supported for UK appointments', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/postcode/uk/nw107ns'
      })
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.valid).to.be.eq(true);
          expect(response.body.description).to.be.eq('supported postcode for uk appointments');
          cy.log(JSON.stringify(response.body));
        });
    });
  });
  context('GET /postcode/uk/zz149fr', () => {
    it('should return that the postcode is unsupported for UK appointments', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/postcode/uk/zz149fr'
      })
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.valid).to.be.eq(false);
          expect(response.body.description).to.be.eq('unsupported postcode for uk appointments');
          cy.log(JSON.stringify(response.body));
        });
    });
  });
  context('GET /postcode/us/10001', () => {
    it('should return that the postcode is unsupported for US appointments', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/postcode/us/10001'
      })
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.valid).to.be.eq(false);
          expect(response.body.description).to.be.eq('unsupported postcode for us appointments');
          cy.log(JSON.stringify(response.body));
        });
    });
  });
  context('GET /postcode/us/tn149fr', () => {
    it('should return that the postcode is invalid for US appointments', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/postcode/us/tn149fr'
      })
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.valid).to.be.eq(false);
          expect(response.body.description).to.be.eq('invalid postcode for us appointments');
          cy.log(JSON.stringify(response.body));
        });
    });
  });
  context('GET /postcode/zz/tn149fr', () => {
    it('should return that the country code ZZ is invalid for appointments', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/postcode/zz/tn149fr'
      })
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.valid).to.be.eq(false);
          expect(response.body.description).to.be.eq('invalid country code zz for appointments');
          cy.log(JSON.stringify(response.body));
        });
    });
  });
});