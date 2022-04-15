// type definitions for Cypress object "cy"
/// <reference types="cypress" />


describe('Sub-Menus Functionality', () => {

before(() => {
    cy.visit('http://localhost:8080/#/root/plans/list');

    cy.get('input[name="username"]')
        .clear()
        .type("admin");

        cy.get('input[name="password"]')
        .clear()
        .type("init")

        cy.get('.btn').click();
})

    it('Visits step site and verify sub-menus functionality', () =>{
        cy.get('[ng-class="{ active: isViewActive(\'functions\') }"] > a').click();
        cy.get(':nth-child(3) > .btn').should('be.visible');

        cy.get('[ng-class="{ active: isViewActive(\'parameters\') }"] > a').click();
        cy.get(':nth-child(3) > .btn').should('be.visible');

        cy.get('[ng-class="{ active: isViewActive(\'executions\') }"] > a').click();
        cy.get(':nth-child(3) > .btn').should('be.visible');

        cy.get('[ng-class="{ active: isViewActive(\'scheduler\') }"] > a').click();
        cy.get(':nth-child(1) > .btn').should('be.visible');

        cy.get('[ng-class="{ active: isViewActive(\'grid\') }"] > a').click();
        cy.get('.active > .nav-link').should('be.visible');

        cy.get('[ng-if="authService.hasRight(\'admin\')"] > a').click();
        cy.get('.active > .nav-link').should('be.visible');
    })
})