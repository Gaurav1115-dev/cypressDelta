
        // https://on.cypress.io/_
        describe('Image Validation', () => {

            it('Images ', () => {
        
                cy.visit('https://www.google.com/')
                cy.get('input[title= "Search"]').type('images of love{enter}')
                cy.ImageValidation('div.uhHOwf')               
            })
        })

        
               
    


