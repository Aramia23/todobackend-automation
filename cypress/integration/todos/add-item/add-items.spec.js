/// <reference types = "Cypress"/>
import testData from '../../../fixtures/todoData.json' 

//With this test case we can assure that every item added is showed up at front
//we are adding different kinds of data, letters, number, special characters.
//To create appropiate enviroment to test, delete backend endpoints is used todo clean data.
describe('Add diferents items to list', ()=>{
    beforeEach('Open and check url', () =>{
        cy.deleteTodoItems()
        cy.checkUrl()
    })
    it('Add and check regular items',()=>{
        let testDataJson = Object.values (testData)
        testDataJson.forEach( e => {
            cy.addItem(e)
            cy.checkItemOnList(e)            
        })
    }) 

})