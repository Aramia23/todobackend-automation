/// <reference types = "Cypress"/>
import testData from '../../fixtures/example.json' 

describe('Edit item from the list', ()=>{
        it('Check correct url',()=>{
            cy.checkUrl()
        })
        it('Add and check regular item added',()=>{
            cy.addItem(testData.item)
            cy.checkItemOnList(testData.item)
        })
        it('Edit element added in previos step',()=>{
            cy.editItem(testData.item,testData.changeItem)
            cy.checkItemOnList(testData.changeItem)
        })
})