/// <reference types = "Cypress"/>
import testData from '../../../fixtures/todoData.json' 
import {deleteSpecificItemByDescription} from '../../../support/Commands/todo-commands-backend';

//With this test case we can assure that an element is deleted from the to-do list
//To ensure the item is deleted we try to find the item on the list.
//To create appropiate enviroment to test, delete and add elementes backend endpoints are used todo clean and generate appropiate data
describe('Delete item from list', ()=>{
    beforeEach('Open and check url', () =>{
        cy.deleteTodoItems();
        cy.createTodosItemsByApi(testData.item,testData.item);
        cy.checkUrl();
    })
    it('Delete specifict item',()=>{
        cy.deleteSpecificItemByDescription(testData.item)  
        cy.checkItemNotOnList(testData.item)
    })

})