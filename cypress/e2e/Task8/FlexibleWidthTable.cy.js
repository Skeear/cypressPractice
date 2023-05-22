describe('Test table with flexible width',()=>{

    beforeEach(()=>{
        cy.visit('https://datatables.net/examples/basic_init/flexible_width.html');
    })

    it('Verify if the table loads successfully',()=>{
        cy.get('#example').should('be.visible');
        cy.get('thead tr th:nth-of-type(1)').should('be.visible').and('contain','Name');
        cy.get('thead tr th:nth-of-type(2)').should('be.visible').and('contain','Position');
        cy.get('thead tr th:nth-of-type(3)').should('be.visible').and('contain','Office');
        cy.get('thead tr th:nth-of-type(4)').should('be.visible').and('contain','Age');
        cy.get('thead tr th:nth-of-type(5)').should('be.visible').and('contain','Start date');
        cy.get('thead tr th:nth-of-type(6)').should('be.visible').and('contain','Salary')
    })

    it('Verify pagination functionality',()=>{
        let noOfPages;
        cy.get('span a.paginate_button').then( $list =>{
        noOfPages = $list.length;
        for(let i = 1; i<= noOfPages; i++){
            cy.contains('span a.paginate_button', `${i}`).click();
            cy.contains('span a.paginate_button', `${i}`).should('have.class','current');
        }
        cy.get('#example_previous').click();
        noOfPages -= 1;
        cy.contains('span a.paginate_button',`${noOfPages}`).should('have.class','current');

        cy.get('#example_next').click();
        noOfPages += 1;
        cy.contains('span a.paginate_button',`${noOfPages}`).should('have.class','current');
       })
    })

    it('Verify table length functionality',()=>{
        cy.get('select').should('contain','10').and('contain','25').and('contain','50').and('contain','100');
        
        cy.get('select').select('10');
        cy.get('tbody:first tr').should($list =>{
            expect($list).to.have.length(10);
        })

        cy.get('select').select('25');
        cy.get('tbody:first tr').should($list =>{
            expect($list).to.have.length(25);
        })

        cy.get('select').select('50');
        cy.get('tbody:first tr').should($list =>{
            expect($list).to.have.length(50);
        })
        cy.get('select').select('100');
        cy.get('tbody:first tr').should($list =>{
            expect($list).to.have.length(57);
        })

        cy.get('select').select('25').should('have.value','25');
    })

    it('Verify the search functionality',()=>{
        cy.get('label > input').type('New York{enter}').should('have.value','New York');
        
        cy.get('tbody:first tr td:nth-of-type(3)').each(($val, index, $list) =>{
            cy.wrap($val).should('have.text','New York')
        })

        cy.get('span a.paginate_button').then($list =>{
            expect($list).to.have.length(2);
        })

        cy.get('select').select('25');
        cy.get('tbody:first tr').should($list =>{
            expect($list).to.have.length(11);
        })
    })

    it('Verify the sorting functionality',()=>{

        //get the column as an array
        function getCellTextArray(column){
            let cellContents = [];
            return new Cypress.Promise(resolve =>{
                cy.get(column).each($el=>{
                    cellContents.push($el.text())
                })
                .then(()=> resolve(cellContents))
            })
        }
        //check if the column is sorted in ascending order
        function isSortedAsc(column){
            getCellTextArray(column).then(cellContents => {
                let actual = cellContents.slice();
                cy.wrap(actual).should('deep.eq', cellContents.sort())
            })
        }

        //check if the column is sorted in descending order
        function isSortedDesc(column){
            getCellTextArray(column).then(cellContents => {
                let actual = cellContents.slice();
                cy.wrap(actual).should('deep.eq', cellContents.sort().reverse())
            })
        }

        let selector = 'td.sorting_1'
        
        //first column is sorted in ascending order by defaut
        cy.get('thead tr th:nth-child(1)').should('have.class','sorting_asc');
        //check if first column is sorted
        isSortedAsc(selector);
        cy.get('thead tr th:nth-child(1)').click();
        //check if the row is sored in descending order
        cy.get('thead tr th:nth-child(1)').should('have.class','sorting_desc')
        isSortedDesc(selector);
        let columnsToCheck = ['2','3','4','5'].forEach(($el)=>{
            cy.get(`thead tr th:nth-child(${$el})`).click();
            cy.get(`thead tr th:nth-child(${$el})`).should('have.class','sorting_asc');
            isSortedAsc(selector);
            cy.get(`thead tr th:nth-child(${$el})`).click();
            cy.get(`thead tr th:nth-child(${$el})`).should('have.class','sorting_desc');
            isSortedDesc(selector);
        })
        // problematic part | not working
        cy.get(`thead tr th:nth-child(6)`).click();
        cy.get(`thead tr th:nth-child(6)`).should('have.class','sorting_asc');
        isSortedAsc(selector);
        cy.get(`thead tr th:nth-child(6)`).click();
        cy.get(`thead tr th:nth-child(6)`).should('have.class','sorting_desc');
        isSortedDesc(selector);
        
       /* cy.get('thead tr th:nth-child(1)').within($el =>{
            cy.window().then(win =>{
                const upArrow = win.getComputedStyle($el[0], "::before");
                const showActive = upArrow.getPropertyValue('opacity');
                expect(showActive).to.equal('0.6')
            })
        })*/
    })
})