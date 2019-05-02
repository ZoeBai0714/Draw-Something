const express = require('express')
const app = express()
const pry = require('pryjs')
const http = require('http').Server(app)
//const io = require('socket.io')(http)


app.get('/', (req, res)=> res.send('Hello World'))//'/frontend/index.html',{ root: "Draw-Something" 
app.listen(3000)
console.log("you're listening to 3000...")

/* 
 io.on('connection', function(socket){
    console.log('an user connected');
  });
*/

  
//io.listen(3000)
