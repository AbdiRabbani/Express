//External cclearonfig

require("dotenv").config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    let status = process.env.PORT == 5000 ? 'Production' : 'Development'
    res.send(`Haloo, anda sedang di halaman ${status} page`)
})

app.listen(process.env.PORT, function(){
    console.log(`Anda Berjalan di port : ${process.env.PORT}`)
})