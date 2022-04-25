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


Cypress.Commands.add("DropDown", (clickonDropDown, selectingValuesFromDropDown) => {
    cy.get(clickonDropDown).each(($listValue, index, $list) => {
        // $el is a wrapped jQuery element
        // use cypress commands on it
        if ($listValue.text().includes(selectingValuesFromDropDown)) {
            cy.wrap($listValue).click({ force: true })
        }
    })
})

Cypress.Commands.add("ImageValidation", (clickonImage) => {
    cy.get(clickonImage).each(($listValue, index, $list) => {
        // $el is a wrapped jQuery element
        // use cypress commands on it
        
        cy.get(clickonImage).invoke('width').then(function(widthofImage){
            cy.log(widthofImage)
        });
       
        cy.get(clickonImage).invoke('height').then(function(heightofImage){
            cy.log(heightofImage)
        })
    })
})

    


Cypress.Commands.add("validatingUrl", (parentNavigation, childNavigation, urlValidation) => {
    cy.contains(parentNavigation).trigger('mouseover')
    cy.contains(childNavigation).click({ force: true })
    cy.url().should('contain', urlValidation)
    //cy.get(-1)
})



// calenderlocator ==>.calenderDepartSpan
// randomvaluefromcalender ==>td.dl-datepicker-available-day

Cypress.Commands.add("tripType", (calenderlocator, randomvaluefromcalender,tripType) => {
   
    switch (tripType) {
        case 'One Way':
            cy.DropDown('#selectTripType-desc li', 'One Way')
            cy.get(calenderlocator).click({ force: true })
            cy.get(randomvaluefromcalender).then($options => {
                const count = $options.length
                const randomIndex = Math.floor(Math.random() * count) 
                cy.wrap($options.eq(randomIndex)).click({ force: true })
                cy.get('.donebutton').click()
                
                
            })
            break;
            case 'Round Trip':
                cy.DropDown('#selectTripType-desc li', 'Round Trip')
                for(var i=0 ;i<2;i++)
                {
                cy.get(calenderlocator).click({ force: true })
                cy.get(randomvaluefromcalender).then($options => {
                const count = $options.length
                const randomIndex = Math.floor(Math.random() * count)
                cy.wrap($options.eq(randomIndex)).click({ force: true })
                cy.get('.donebutton').click()
                })
                
            }
            break;
            
                
               
            
        }
           
        
    })

  







