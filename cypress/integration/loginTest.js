// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Login Test', () =>{
    it('Visits step Page and perform a login', () => {
        cy.visit('http://localhost:8080/#/root/plans/list');

        cy.get('input[name="username"]')
            .clear()
            .type("admin");

            cy.get('input[name="password"]')
            .clear()
            .type("init")

            cy.get('.btn').click();
            cy.get(':nth-child(3) > .btn').should('be.visible');
    })
})