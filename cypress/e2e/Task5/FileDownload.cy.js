describe('Practice with file download',()=>{
    it('download file e2e',()=>{
        cy.visit('https://demo.automationtesting.in/FileDownload.html');

        //Mixed Content: The page at 'https://demo.automationtesting.in/__/#/specs/runner?file=cypress/e2e/Task5/FileDownload.cy.js'
        //was loaded over HTTPS, but requested an insecure script 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'.
        //This request has been blocked; the content must be served over HTTPS.
    })
}) 