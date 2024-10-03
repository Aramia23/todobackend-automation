/// <reference types = "Cypress"/>

//With this test case we can assure the functionality of front app, using a mock.
//To create appropiate enviroment to test, delete backend endpoint is used todo clean data.
describe.skip('Delete item from list', ()=>{
    beforeEach('Open and check url', () =>{
        //cy.deleteTodoItems()
        cy.checkUrl()
    })
    it('Delete items using a get items mock',()=>{
        cy.intercept('GET', Cypress.env('apiUrl'), { fixture: 'getMockResponse.json'}).as('getItems');
        cy.reload()       
        cy.deleteItem()
    })

})