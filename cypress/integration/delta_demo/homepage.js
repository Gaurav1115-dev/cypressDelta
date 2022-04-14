// deltaHomePage.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />
//const cypress = require("cypress")




describe('example to-do app', () => {

    it('Demo Delta ', () => {
        // https://on.cypress.io/_

        cy.visit(" https://www.delta.com")
        cy.get('#fromAirportName > .airport-code').as('frombutton')


        cy.get('@frombutton').click()
        cy.get('#search_input').as('inputValuesfromDynamicDropdown')
        cy.get('@inputValuesfromDynamicDropdown').clear()
        cy.get('@inputValuesfromDynamicDropdown').type('BLR')
        cy.get('.airport-list').as('listofairport')
        cy.get('@listofairport').click()

        cy.get('#toAirportName > .airport-code').as('tobutton')
        cy.get('@tobutton').click()
        cy.get('@inputValuesfromDynamicDropdown').clear()
        cy.get('@inputValuesfromDynamicDropdown').type('new york')
        cy.login('.airport-list a span', 'LGA') //will explain you while creating the framework

        // cy.get('.airport-list a span').each(($toDestination, index, $list) => {
        //     // $el is a wrapped jQuery element
        //     // use cypress commands on it
        //     if ($toDestination.text().includes('LGA')) {
        //         cy.wrap($toDestination).click({ force: true })
        //     }
        // })
        // cy.get('@listofairport').contains('LGA').click()

        // cy.get('#selectTripType-val').click()

        //cy.get('#selectTripType-desc').select ('One Way').click()

        /*Parent to child navigation (Parent child chaining) */

        // cy.get('#selectTripType-desc')
        // .find('li')
        // .contains('One Way')
        // .click()
        //cy.login('#selectTripType-desc li','Round Trip')
        // cy.tripType('.calenderDepartSpan' ,'td.dl-datepicker-available-day .dl-state-default')
         cy.tripType('.calenderDepartSpan' ,'td.dl-datepicker-available-day a.dl-state-default')
        
        // cy.get('#selectTripType-desc li').each(($triptype, index, $list) => {
        //     // $el is a wrapped jQuery element
        //     if ($triptype.text() === 'Round Trip') {
        //         // wrap this element so we can
        //         // use cypress commands on it
        //         cy.wrap($triptype).click({ force: true })
        //     }
        // })
        //cy.tripType('.calenderDepartSpan','td.dl-datepicker-available-day .dl-state-default')
        //  cy.get('div.calDispValueCont').click({ force: true })

        // cy.get('.dl-datepicker-current-day :visible').click({ force: true })

       // cy.get('#control-nationality').click()  // open the dropdown

        // cy.get('td.dl-datepicker-available-day')    // all elements with id starting "option-nationality"
        //     .then($options => {
        //         const count = $options.length
        //         const randomIndex = Math.floor(Math.random() * count)
        //         cy.wrap($options.eq(randomIndex)).click()
        //     })

        //cy.scrollTo('top')
        //cy.get('button.donebutton:visible').click({ force: true })
        //cy.get('.donebutton').click({ force: true })

        // cy.get('ul#passengers-desc ').click({force: true})

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

        cy.get('#shopWithMiles').check({ force: true })
        cy.get('#btnSubmit').click({ force: true })

    })
})