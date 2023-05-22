describe('Practive API testing', ()=>{
    it('create user via POST request', ()=>{
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body:{
                "name": "John Doe",
                "job": "unknown"
            }
        }).as('createNewUser')

        cy.get('@createNewUser').then(response =>{
            expect(response.status).to.eq(201)
        })
    })

    it('modify user via PUT request', ()=>{
        cy.request({
            method: "PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "Jon",
                "job": "Cartoonist"
            }
        }).as('updateUserInfo')

        //logic to always use the current date
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth()+1;
        if (month < 10) {
            month = `0${month}`;
        }
        let year = date.getFullYear();
        let currentDate = `${year}-${month}-${day}`;
       

        cy.get('@updateUserInfo').then(response =>{
            expect(response.status).to.eq(200)
            expect(response.body).property('updatedAt').to.contains(`${currentDate}`)
        })
    })

    it('find user by email and delete the user', ()=>{
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=1"
        }).as('getListOfUsersOnPageOne')

        let userID = -1;
        cy.get('@getListOfUsersOnPageOne').then(response=>{
            expect(response.status).to.eq(200)
            for(let i =0; i< response.body.data.length; i++){
                if (response.body.data[i].email === 'tobias.funke@reqres.in'){
                    userID = response.body.data[i].id
                }
            }
            if(userID == -1){
                cy.request({
                    method: "GET",
                    url: "https://reqres.in/api/users?page=2"
                }).as('getListOfUsersOnPageTwo')
                
                cy.get('@getListOfUsersOnPageTwo').then(response=>{
                    expect(response.status).to.eq(200)
                    for(let i =0; i< response.body.data.length; i++){
                        if (response.body.data[i].email === 'tobias.funke@reqres.in'){
                            userID = response.body.data[i].id
                        }
                    }
                }).then(()=>{
                    cy.request({
                        method: "DELETE",
                        url: `https://reqres.in/api/users/${userID}`
                    }).as('deleteUser')
            
                    cy.get('@deleteUser').then(response =>{
                        expect(response.status).to.eq(204)
                    })
                })
            }else{
                cy.request({
                    method: "DELETE",
                    url: `https://reqres.in/api/users/${userID}`
                }).as('deleteUser')
        
                cy.get('@deleteUser').then(response =>{
                    expect(response.status).to.eq(204)
                })
            }
        })
        
    })
})