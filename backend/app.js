const express = require('express')
const app = express()
const pry = require('pryjs')
//const io = require('socket.io')(server)


app.get('/', (req, res)=> res.send('Hello World'))
//io.on('connection', (socket)=>console.log("New user connected"))
app.listen(3000)
console.log("you're listening to 3000...")
  