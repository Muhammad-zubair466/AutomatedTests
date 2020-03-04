

const assert =require('chai').assert;
const chai = require('chai');
const chaiHttp = require("chai-http");
const app =require('../app');
//var request = require('supertest');
const { expect } = chai;
chai.use(chaiHttp);

chai
      //.request("http://10.81.1.90:8001")
      .request("http://app.ivolve.io:30627")

      .post("/api/v1/auth/login")
      .send({
       // "username": "admin",
       "username": "abc",
        
       // "password": "8MoZUii3lFHoJTx6qaonNE1QO",
       "password" : "123",
       // "organization": "qa"
     // "domain" : "qa"
      })
      .end((err, res) => {
        
          console.log("Error",err);
          console.log("Response ",res);
          console.log("token--------------------------")
          console.log("token id heere",)
          var token12 = res.body.tokenMetadata.tokenId
        expect(res).to.have.status(200);
        
        //expect(res.body.status).to.equals("success");
        //expect(res.body.result).to.equals(10);
        done();
      });
      //create router



      chai
      //.request("http://10.81.1.90:8001")
      .request("http://app.ivolve.io:30627")

      .post("/api/v1/service/network/create_router")
      .send({
        "name":"ROUTER5",
        "is_admin_state_up": true,
        "external_gateway_info": {
          "network_id":"91a5ef98-f3da-41c0-a2d5-ad989455b4de",
          "enable_snat": true
        }
      })
      .end((err, res) => {
        
          console.log("Error",err);
          console.log("Response ",res);
        expect(res).to.have.status(200);
      
        done();
      });

     
      
     