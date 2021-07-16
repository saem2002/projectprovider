const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
var cookieParser = require('cookie-parser')
app.use(cookieParser());

dotenv.config({path:'./config.env'});
require("./db/conn")

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT ;
const User=require('../server/model/userSchema');


app.get('/contact',(req,res)=>{
    res.send(`Hello World from the server`)
});

app.get('/signin',(req,res)=>{
    res.send(`Hello World from the server`)
});

app.get('/register',(req,res)=>{
    res.send(`Hello World from the server`)
});

if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));

    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })


}
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
