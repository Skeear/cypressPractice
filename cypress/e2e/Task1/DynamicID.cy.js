describe('Working with dynamic ID', () => {

  it('Button with dynamic ID', () => {
    cy.visit('http://uitestingplayground.com/dynamicid')
    cy.get('button').contains("Button with Dynamic ID").click(); //searches for a button whith the correct text
  })

})