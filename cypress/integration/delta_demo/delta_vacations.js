describe('Delta Vacations', () => {

    it('Delta_Vacations', () => {

       
      cy.forceVisit("https://www.delta.com/vacations/search.action")
      cy.get('fromAirportStdHotelFlight').click()

      //cy.url().then(urlValue =>cy.visit('https://www.delta.com'+ '/us/en/delta-vacations'))


                
    })
})
