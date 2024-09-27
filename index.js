require('dotenv').config()
const express = require('express') // Common JS
// import express from "express" // Module JS

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Soham Narkhedkar')
})

app.get('/login',(req,res) => {
    res.send('<h1>Please login first</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// In production .env file is used.
// As companies may require different ports.