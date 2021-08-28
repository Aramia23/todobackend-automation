Cypress.Commands.add("checkUrl", () => {
    cy.visit('/')
    cy.url().should('include', 'index.html')
    cy.get('h1').should('have.text','todos')
})

Cypress.Commands.add("addItem", (item) =>{
    cy.get('#new-todo')
        .clear()
        .type(item)
        .type('{enter}')
})

Cypress.Commands.add("checkItemOnList", (item) =>{
    cy.get('#todoapp')
      .should('contain', item)
})

Cypress.Commands.add("editItem", (item,changeItem) =>{
    cy.get('#todoapp')
      .contains(item)
      .dblclick().focused()
      .type('{selectall}{del}')
      .type(changeItem)
      .type('{enter}')

})

Cypress.Commands.add("deleteItem", (item) =>{
    cy.get('#todoapp')
      .find('.destroy')
      .invoke('show')
    cy.get('.view > .destroy').click({ multiple: true })

      
 
})