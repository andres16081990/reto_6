'use strict'

import express from 'express'

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}));



app.get('/',(req,res)=>{
    res.status(200).send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="/" method="POST">
            <label for="get_name"></label>
            <input type="text" name="name" id="name">
            <label for="send"></label>
            <button type="submit">Enviar</button>
        </form>
        
    </body>
    </html>`)
})

app.post('/',(req,res)=>{
    const {name}= req.body
    res.status(200).send(`<h1>Hola ${name}!</h1>`)
})

app.listen(port,()=>console.log(`server rinung in port ${port}`))

