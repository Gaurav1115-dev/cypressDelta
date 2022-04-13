// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '../support/commands';
Cypress.Commands.add("login", (locator,toDestination) => {
    cy.get(locator).each(($listValue, index, $list) => {
        // $el is a wrapped jQuery element
        // use cypress commands on it
        if ($listValue.text().includes(toDestination)) {
            cy.wrap($listValue).click({ force: true })
        }
    })
    })

    Cypress.Commands.add("validatingUrl", (parentNavigation,childNavigation,urlValidation) => 
    {
          cy.contains(parentNavigation).trigger('mouseover')
          cy.contains(childNavigation).click({force:true})
          cy.url().should('contain',urlValidation)
          cy.get(-1)
    })