describe('example to-do app', () => {


    it('Demo Delta ', () => {
        // https://on.cypress.io/_
        
          cy.visit("https://www.delta.com")
        //  cy.contains('Travel Info').trigger('mouseover')
        //  cy.contains('Travel Planning Center').click({force:true})
        //  cy.url().should('contain','travel')
        //  cy.get(-1)

         cy.validatingUrl('Travel Info','Delta Vacations','travel')
        
         //cy.get('div.hero').should('be.visible','visible')
         cy.contains('Advanced Search Options').invoke('removeAttr', 'target').click();
       
        //cy.get('.sidebar').scrollTo('bottom')
    //     cy.get(':nth-child(3) > .panel-heading > .h4 > .nav-item :visible').click()
        
    //     //cy.get(':nth-child(3) > .panel-heading > .h4 > .nav-item').click()
    //     //cy.get('.desc > :nth-child(1)').should('be.visible')
    //     cy.get('.desc > :nth-child(1)').should('have.text')
    //    // cy.go('back')
    //      cy.go(-1)
    //     cy.get('.inspiration-sub-nav-link').click()
    //     cy.get(':nth-child(5) > .panel-heading > .h4 > .nav-item').click()
    //     cy.get(':nth-child(2) > .h1').should('have.text','')
    //     cy.go('back')

    })

})
