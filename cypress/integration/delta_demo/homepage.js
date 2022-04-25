// deltaHomePage.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />
//const cypress = require("cypress")
import deltaHome from '../pageObjectModel/deltaHome'
const dataJson = require('../../fixtures/homepage')


describe('example to-do app', () => {

    it('Demo Delta ', () => {
        // https://on.cypress.io/_
        cy.fixture('homepage').then((testData) =>{

        var deltaHomePage = new deltaHome()
        cy.visit(" https://www.delta.com")
        deltaHomePage.getFromButton().click()
        deltaHomePage.getDynamicDropdownForToAndFrom().clear()
        deltaHomePage.getDynamicDropdownForToAndFrom().type(testData.fromDestination)
        deltaHomePage.getListOfAirport().click()

        deltaHomePage.getToButton().click()
        deltaHomePage.getDynamicDropdownForToAndFrom().clear()
        deltaHomePage.getDynamicDropdownForToAndFrom().type(testData.toDestination)
        cy.DropDown('.airport-list a span', 'LGA') //will explain you while creating the framework
    
        cy.tripType('.calenderDepartSpan' ,'td.dl-datepicker-available-day a.dl-state-default','Round Trip')
        
        cy.DropDown('#passengers-desc li', testData.numberOfPassenger)

      
        //cy.get('').select ('4 Passengers').click({force: true})
        // cy.get('.calenderDepartSpan').should(be.visible)

        cy.get('#shopWithMiles').check({ force: true }).should('be.checked','checked')
        cy.get('#btnSubmit').click({ force: true })
        })

    })
})