/// <reference types = "Cypress"/>
import testData from '../../fixtures/example.json' 

describe('Delete item from list', ()=>{
        it('Check correct url',()=>{
            cy.checkUrl()
        })
        it('Add and check regular item added',()=>{
            cy.addItem(testData.item)
            cy.checkItemOnList(testData.item)
        })
        it('Delete previos item',()=>{
            cy.deleteItem(testData.item)
        })

})