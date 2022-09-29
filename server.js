const express = require('express')
const app = express()

app.get('/greeting:name', (req,res)=>{
    const { name } = req.params
    res.send(`Hey, how is it going ${name}`)
})

app.get('/tip/:total/:tipPercentage', (req,res)=>{
    const { total, tipPercentage } = req.params
    res.send(`Here is your total = ${total}, and you the percentage you are tipping is ${tipPercentage}`)
})