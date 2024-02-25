// Install Ajv library

//the command - npm install Ajv

const Ajv=require('ajv')
const ajv=new Ajv


describe("Json schema validation",()=>{

    it("Schema validation against response",()=>{

            cy.request({

                        method:"GET",
                        url:"https://fakestoreapi.com/products"
            })

            .then( (response)=>{


                const Schema={
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "title": "Generated schema for Root",
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "number"
                            },
                            "title": {
                              "type": "string"
                            },
                            "price": {
                              "type": "number"
                            },
                            "description": {
                              "type": "string"
                            },
                            "category": {
                              "type": "string"
                            },
                            "image": {
                              "type": "string"
                            },
                            "rating": {
                              "type": "object",
                              "properties": {
                                "rate": {
                                  "type": "number"
                                },
                                "count": {
                                  "type": "number"
                                }
                              },
                              "required": [
                                "rate",
                                "count"
                              ]
                            }
                          },
                          "required": [
                            "id",
                            "title",
                            "price",
                            "description",
                            "category",
                            "image",
                            "rating"
                          ]
                        
                      }
                }            //end of Schema

                const validate=ajv.compile(Schema)
                const isvalid=validate(response.body)
                expect(isvalid).to.be.true;
            })
    })
})