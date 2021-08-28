/// <reference types = "Cypress"/>
import testData from '../../fixtures/example.json' 

describe('Add diferents items to list', ()=>{
    beforeEach('Open and check url', () =>{
        cy.checkUrl()
    })
    it('Add and check regular item added',()=>{
        cy.addItem(testData.item)
        cy.checkItemOnList(testData.item)
    })
    it('Add and check diferents items',()=>{
        let testDataJson = Object.values (testData)
        testDataJson.forEach( e => {
            cy.addItem(e)
            cy.checkItemOnList(e)            
        })

    })

})