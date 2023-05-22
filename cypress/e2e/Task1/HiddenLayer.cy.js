describe("Don't interact with elements overlapped in z-order", () =>{

 it("test the button can't be clicked twice",()=>{
    
    cy.visit('http://uitestingplayground.com/hiddenlayers');
    cy.get('.btn-success').click();
    //cy.get('.btn-success').trigger('mouseover'); Mousover trigger should fail with timeout because element is covered by anoteher element

    const areOverlapping = (el1,el2) =>{
      if (el1.right < el2.left || el2.right < el1.left){
          return false
      }
      if(el1.bottom < el2.top || el2.bottom < el1.top){
          return false
      }
      return true
  }

  const getRectangle = $el => $el[0].getBoundingClientRect()

  cy.get('.btn-success')
            .then(getRectangle)
            .then(rectA =>{
                cy.get('.btn-primary')
                    .then(getRectangle)
                    .then(rectB =>{
                        expect(areOverlapping(rectA,rectB)).to.be.true;
                    })
            })
 })

})