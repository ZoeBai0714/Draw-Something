const app = require('express')();
const http = require('http');
const socketIO = require("socket.io");


const server = http.createServer(app); // initialize server
const io = socketIO(server); // create socket using server ^


io.on("connection", socket => {
    socket.on('welcome.index', response => {
        console.log(response)
    })

    //socket.on('disconnect', () => console.log("Client disconnected"))
});

const port = 3000
server.listen(port, () => console.log(`Listening on port ${port}`));

/*
app.get('/', (req, res) => {
    res.send('Hello World!')
})
*/

/*
  app.js is the entry point
  build models and controllers for backend
*/


const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

sequelize
 .authenticate()
 .then(() =>{
     console.log('connection established')
 })
 .catch(err => {
     console.log('unable to connect', err)
 })

