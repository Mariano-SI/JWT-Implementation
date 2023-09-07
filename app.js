require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");

const app = express();
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


const User = require('./models/User');

app.get('/', (req,res)=>{
    res.status(200).json({
        message:"Hello, World!"
    })
})

/*Rota para criar usuários, por padrão ela é publica
 e apenas deve mandar parametros corretos */
app.post("/auth/register", async(req, res)=>{
    const {name, email, password, confirmPassword} = req.body;

    try {
        //validações de entradas, controller
        if (!name) {
            const error = new Error("O nome é obrigatório");
            error.statusCode = 422; 
            throw error;
        }
        if (!email) {
            const error = new Error("O email é obrigatório");
            error.statusCode = 422; 
            throw error;
        }
        if (!password) {
            const error = new Error("A senha é obrigatória");
            error.statusCode = 422; 
            throw error;
        }
        if (password != confirmPassword) {
            const error = new Error("As senhas devem ser iguais");
            error.statusCode = 422; 
            throw error;
        }

        //validações de regra de negocio, representa uma domain
        const userExists = await User.findOne({email:email});

        if(userExists){
            const error = new Error("Usuário já cadastrado no sistema");
            error.statusCode = 422; 
            throw error;
        }

        //encriptando senha
        const salt = await bcrypt.genSalt(12);
        const encryptedPassword = await bcrypt.hash(password, salt);

        //registrando usuário no banco
        const user = new User({
            name,
            email,
            password: encryptedPassword
        });

        await user.save().then(()=>{
            res.status(201).json({
                message: "Registro bem-sucedido",
            });
        })

    } catch (error) {
        res.status(error.statusCode || 500).json({
            error: error.message, 
          });
    }    
})

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.6gwjivt.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    app.listen(3000, ()=>{
        console.log("Servidor rodando na porta 3000!")
    });

}).catch((err)=> console.log(err));
