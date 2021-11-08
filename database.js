require('dotenv').config();
const mongoose = require("mongoose");
const assert = require("assert");
const dbUrl = "mongodb://127.0.0.1:27017/randeep_new";

mongoose.connect(
     dbUrl,{useNewUrlParser:true},
);
// mongoose.connection.once('open',function(){
// console.log('connection has been established');
// }).on('error',function(error){
//     console.log('error '+error);
// });