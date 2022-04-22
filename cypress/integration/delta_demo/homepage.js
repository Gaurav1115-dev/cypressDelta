// deltaHomePage.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />
//const cypress = require("cypress")
import deltaHome from '../pageObjectModel/deltaHome'



describe('example to-do app', () => {

    it('Demo Delta ', () => {
        // https://on.cypress.io/_

        var deltaHomePage = new deltaHome()
        cy.visit(" https://www.delta.com")
        deltaHomePage.getFromButton().click()
        deltaHomePage.getDynamicDropdownForToAndFrom().clear()
        deltaHomePage.getDynamicDropdownForToAndFrom().type('BLR')
        deltaHomePage.getListOfAirport().click()

        deltaHomePage.getToButton().click()
        deltaHomePage.getDynamicDropdownForToAndFrom().clear()
        deltaHomePage.getDynamicDropdownForToAndFrom().type('New York')
        cy.Dr('.airport-list a span', 'LGA') //will explain you while creating the framework
    
        cy.tripType('.calenderDepartSpan' ,'td.dl-datepicker-available-day a.dl-state-default')
        
       

        cy.get('#passengers-desc li').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === '5 Passengers') {
                // wrap this element so we can
                // use cypress commands on it
                cy.wrap($el).click({ force: true })
            }
        })
        //cy.get('').select ('4 Passengers').click({force: true})
        // cy.get('.calenderDepartSpan').should(be.visible)

        cy.get('#shopWithMiles').check({ force: true }).should('be.checked','checked')
        cy.get('#btnSubmit').click({ force: true })

    })
})