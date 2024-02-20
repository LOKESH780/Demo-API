describe("API TESTING",()=>{


    // it("Approch 1 - hardcoding the json object",()=>{

    //     const requestbody={
    //         "tourist_name": "Mike",
    //         "tourist_email": "mike16453@gmail.com",
    //         "tourist_location": "Paris"
    //     }

    //     cy.request(
    //         {
    //             method:"POST",
    //             url:"http://restapi.adequateshop.com/api/Tourist",
    //             body:requestbody
    //         })
    //         .then((response)=>{
    //             expect(response.status).to.eq(201)
    //             expect(response.body.tourist_email).to.eq("mike16453@gmail.com")
    //             expect(response.body.tourist_location).to.eq("Paris")
    //             expect(response.body.tourist_name).to.eq("Mike")
    //         })



    // })



    // it.only("Approach 2- Dynamically generating the json object",()=>{                                    //if we want to use only one it block "it.only"

    //     const requestbody={
    //         tourist_name: Math.random().toString(5).substring(2),
    //         tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
    //         tourist_location: "Paris"
    //     }
    //     cy.request({
    //         method: 'POST',
    //         url:"http://restapi.adequateshop.com/api/Tourist",
    //         body:requestbody
    //     })
    //     .then( (response) =>{
    //         expect(response.status).to.eq(201)
    //         expect(response.body.tourist_email).to.eq(requestbody.tourist_email)
    //         expect(response.body.tourist_location).to.eq(requestbody.tourist_location)
    //         expect(response.body.tourist_name).to.eq(requestbody.tourist_name)
    //     })

    // })

    it("Approch 3- Using fixture",()=>{
        cy.fixture('tourist').then( (data)=>{
            const requestbody=data;

            cy.request(
                {
                    method:"POST",
                    url:"http://restapi.adequateshop.com/api/Tourist",
                    body:requestbody
                })

                .then( (response)=>{
                    expect(response.status).to.eq(201)
                    // expect(response.status).equal(200)
                    expect(response.body.tourist_name).to.eq(requestbody.tourist_name)
                    expect(response.body.tourist_email).to.eq(requestbody.tourist_email)
                    expect(response.body.tourist_location).to.eq(requestbody.tourist_location)  

                    expect(response.body).has.property('tourist_email',requestbody.tourist_email)

                    // expect(response.body).have.to.property('tourist_email',requestbody.tourist_email)
                })
        })


    })

})