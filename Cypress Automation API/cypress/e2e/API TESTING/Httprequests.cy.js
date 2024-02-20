describe("HTTP Requests",()=>{
    it("GET call",()=> {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200);

    })

    it("Post call",()=>{
        cy.request({
            method:'POST',
            url:"https://reqres.in/api/users",
            body:{
                name: "morpheus",
                job: "leader"
                 }
        })
    
        .its('status')
        .should('equal',201);
    })


    it("Put call",()=>{
        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            body:{
                name: "morpheus",
                job: "zion resident"
                }
        })
        .its('status')
        .should('equal',200);
    })
    
    it("Delete call",()=>{
        cy.request({
            method:'DELETE',
            url:'https://reqres.in/api/users/2'
        })

        .its('status')
        .should('equal',204);
    })

    it("Patch call",()=>{
        cy.request({
            method:'PATCH',
            url:'https://reqres.in/api/users/2',
            body:{
                name: "morpheus",
                job: "zion resident"
            }
        })
        .its('status')
        .should('equal',200);
    })
})