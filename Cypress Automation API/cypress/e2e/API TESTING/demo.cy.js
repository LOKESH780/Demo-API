describe("API TESTING",()=>{
    
    
    it("demo",()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=1",
        })

        .then( (response) =>{
            expect(response.status).to.eq(200)
        })
    })


})