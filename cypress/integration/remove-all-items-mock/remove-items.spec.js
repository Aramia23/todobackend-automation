/// <reference types = "Cypress"/>
import testData from '../../fixtures/example.json' 
import response from '../../fixtures/response.json' 

describe('Delete item from list', ()=>{
        it('Check correct url',()=>{
            cy.checkUrl()
            cy.intercept('GET', 'https://mysterious-thicket-31854.herokuapp.com/', {
                statusCode: 201,
                body: response.respuestas
            })
            
        })

        it('Delete previos item',()=>{
            cy.deleteItem(testData.item)
        })

})