// const express = require('express') // this is not the way to initialize or import the express
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    // console.log(req.form);
    res.send('HELLO WORLD!!')
    console.log(req.body);    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})