const assert =require('chai').assert;
const chai = require('chai');
const chaiHttp = require("chai-http");
const app =require('../app');
//var request = require('supertest');
const { expect } = chai;
chai.use(chaiHttp);


//chai.request("http://10.81.1.243:8774")
chai.request("http://10.81.1.68:30627")

  .get('/v2.1/servers')
.set('X-Auth-Token','gAAAAABeXIolBJ-LnTXXDiAjbdQQms6bb9lRuylweeOpKiSa4XRZOOunxOY4-zUcfbbAvJ6YRjPYtfpyCnCu2jhBgJoJvOivIE7oroUw_dqp-wjk1RqZqozuapmJIn1jdClo-uAXl81zffXrDI42Ei_SMdD4QCCaww')
//.set('X-Auth-Token', 'gAAAAABeXPyVXpa5YoHfD-Kt7QZm7iUI2A2BLoU29Z74uEtxpOxay93j57IFI0FWSUSMR-ty8NeB5nWsSJJ16JFzpNDi1HnD0p_xYbKCNqq1SbfjoD_7B80psMFO57I5yrjLIwQXH4Eo4-binuLaxIDREfIWNL5bpw')
  .end(function(err, res) {
    console.log(res.body);
  });