/// <reference types = "Cypress"/>
import testData from '../../../fixtures/todoData.json' 

//With this test case we can assure that if an item is edited it will change and appear correctly.
//to asure the item is modifyed we try to find the previos one item.
//To create appropiate enviroment to test, delete backend endpoint is used todo clean data.
describe('Edit item from the list', ()=>{
    beforeEach('Open and check url', () =>{
        //cy.deleteTodoItems()
        cy.checkUrl()
    })
        it('Add and edit items',()=>{
            let testDataJson = Object.values (testData)
            testDataJson.forEach( e => {
                cy.addItem(e)
                cy.checkItemOnList(e)            
            })
            //cy.reload()
            cy.editItem(testData.item,testData.changeItem)
            cy.checkItemOnList(testData.changeItem)
            cy.checkItemNotOnList(testData.item)


        })
})