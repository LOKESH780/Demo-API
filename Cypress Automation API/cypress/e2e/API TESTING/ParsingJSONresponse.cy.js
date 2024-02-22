describe("Parsing json response",()=>{
    
    
    it("Parsing simple json response",()=>{

        cy.request({

                    method:"GET",
                    url:"https://fakestoreapi.com/products"
                    
        })


        .then( (response)=>{

                expect(response.status).to.eq(200);
                expect(response.body[2].id).to.equal(3);
                expect(response.body[2].title).to.equal("Mens Cotton Jacket");
                expect(response.body[2].description).to.equal("great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.")
                expect(response.body[2].rating.rate).to.equal(4.7);
        })



    })


    it.only("parsing complex json response",()=>{
            let totalprice=0
            cy.request({

                method:"GET",
                url:"https://fakestoreapi.com/products",
                qs:{limit:3}

            })

            .then( (response)=>{
                expect(response.status).to.equal(200)
                response.body.forEach(element => {
                    totalprice=totalprice+element.price
                });
                expect(totalprice).to.equal(188.24);

            })

    })

})