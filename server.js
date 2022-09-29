const express = require('express')
const app = express()

app.get('/greeting:name', (req,res)=>{
    const { name } = req.params
    res.send(`Hey, how is it going ${name}`)
})