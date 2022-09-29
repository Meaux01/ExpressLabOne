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
const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
console.log(eightBall.length)
app.get('/magic/:query', (req,res) => {
    const { query } = req.params
    res.send(`The answer to your question ${query} is ${eightBall[Math.floor(Math.random()*20)]}`)
})


app.listen(3000, () => {
    console.log('I am listening')
}) 