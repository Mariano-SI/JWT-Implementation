require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

app.get('/', (req,res)=>{
    res.status(200).json({
        message:"Hello, World!"
    })
})



mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.6gwjivt.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    app.listen(3000, ()=>{
        console.log("Servidor rodando na porta 3000!")
    });

}).catch((err)=> console.log(err));
