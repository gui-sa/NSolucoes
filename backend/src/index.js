const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json()); //Setting up midleware
app.use(cors());
const PORT = 5000;
require('dotenv').config();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);



const con = mysql.createConnection({
    host: 'localhost',
    user: 'salomao', 
    password: 'password', 
    database: 'login'
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

app.post("/auth", async (req,res)=>{
    try{
        con.query(
        `select USER.senha from USER where (email='${req.body.email}');`, (field, result) => {
            console.log(result[0]);
            if (result[0]=== undefined){
                return res.status(200).send(false);
            }
            if( bcrypt.compareSync(req.body.senha, result[0].senha)){
                return res.status(200).send(true);
            }else{
                return res.status(200).send(false);
            }
        })

    }catch(err){
        return res.status(400).send(err);
    }
  });

app.listen(5000, ()=>{console.log(`Server Started on http://localhost:${PORT}`)});