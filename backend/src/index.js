const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json()); //Setting up midleware
app.use(cors());
const PORT = 5000;
require('dotenv').config();
const mysql = require('mysql2');

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
        console.log("bateu aqui");
        con.query(
        `select * from USER where (email='${req.body.email}' and senha='${req.body.senha}');`, (field, result) => {
            if( result[0] === undefined ){
                return res.status(200).send(false);
            }else{
                console.log(result[0]);
                return res.status(200).send(result[0]);
            }
        })

    }catch(err){
        return res.status(400).send(err);
    }
  });

app.listen(5000, ()=>{console.log(`Server Started on http://localhost:${PORT}`)});