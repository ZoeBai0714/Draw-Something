const Player = require('./models/Player')
const app = require('express')();
const http = require('http');
const socketIO = require("socket.io");
const cors = require('cors');
app.use(cors());


const server = http.createServer(app); // initialize server
const io = socketIO(server); // create socket using server ^


io.on("connection", socket => {

    console.log('connected')
    socket.on('welcome.index', (userLogin, respond) => {
        console.log(userLogin)
        Player.create({name: userLogin.state.username, description: userLogin.state.description})
            .then( users => {
                respond(userLogin)
            })
        /*
        const users = [ ]
        users.push(response)
        console.log(users)
        */
    })

    //socket.on('disconnect', () => console.log("Client disconnected"))
});

const port = 3000
server.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/players', (req, res) => {
    Player.findAll()
        .then( players => {
            res.json(players)
        })
})

app.get('/players/:id', (req, res) => {
    Player.findByPk(req.params.id)
        .then( player => {
            res.json(player)
        })
})


/*
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

 */





/*
app.get('/', (req, res) => {
    res.send('Hello World!')
})
*/

/*
  app.js is the entry point
  build models and controllers for backend
*/

