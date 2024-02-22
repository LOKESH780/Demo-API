describe("API TESTING",()=>{

    let authToken=null;

    before("creating access token",()=>{

            cy.request({

                        method:"POST",
                        url:"https://simple-books-api.glitch.me/api-clients/",
                        headers:{
                                    "content-Type":'application/json'
                                },
                        body:{
                            "clientName": "Post",
                            "clientEmail": Math.random().toString(5).substring(2)+"@gmail.com"

                        }

            })

            .then( (response)=>{
                    authToken=response.body.accessToken;

            });
    });


before("Submit an order",()=>{

        cy.request({

                    method:"POST",
                    url:"https://simple-books-api.glitch.me/orders",
                    headers:{
                        "content-type":'application/json',
                        "Authorization": "Bearer " + authToken
                    },
                    body:{
                            "bookId": 1,
                            "customerName": "John"
                        }
        })

        .then( (response)=>{

                expect(response.status).to.eq(201)
                expect(response.body).have.property("created")
                expect(response.body.created).to.eq(true)
        })


})


it("To Get all orders",()=>{

        cy.request({
                    method:"GET",
                    url:"https://simple-books-api.glitch.me/orders",
                    headers:{
                        "content-type":'application/json',
                        "Authorization":"Bearer "+authToken
                    },
                    cookies:{
                        "cookieName":"mycookie"
                    }
        })

        .then( (response)=>{

                expect(response.status).to.eq(200);
                expect(response.body).has.length(1);
        })
})

})