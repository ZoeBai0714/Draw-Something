const express = require('express')
const app = express()
const pry = require('pryjs')
const io = require('socket.io')()


app.get('/', (req, res)=> res.send('Hello World'))

app.listen(3000)
console.log("you're listening to 3000...")