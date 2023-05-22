describe('Check if element is visible on screen',()=>{
    beforeEach(()=>{
        cy.visit('http://uitestingplayground.com/visibility');
        cy.get('.btn-primary').click();
    })

    it('Removed',()=>{
        cy.get('.btn-danger').should('not.exist');
    })

    it('Zero Width',()=>{
        cy.get('.btn-warning').should('have.class','zerowidth');
    })

    it('Overlapped',()=>{

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
                cy.get('#hidingLayer')
                    .then(getRectangle)
                    .then(rectB =>{
                        expect(areOverlapping(rectA,rectB)).to.be.true;
                    })
            })
    })

    it('Opacity 0',()=>{
        cy.contains('button','Opacity 0').should('have.attr','style');
        cy.contains('button','Opacity 0').invoke('attr','style').then(style =>{
            expect(style).equals('opacity: 0;')
        })
    })

    it('Visibility Hidden',()=>{
        cy.contains('button','Visibility Hidden').should('not.be.visible');
    })

    it('Display None',()=>{
        cy.contains('button','Display None').invoke('attr','style').then(style =>{
            expect(style).equals('display: none;')
        })
    })

    it('Offscreen',()=> cy.get('#offscreenButton').should('have.class','offscreen'))
})