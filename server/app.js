const Player = require('./models/Player')
const app = require('express')();
const http = require('http');
const socketIO = require("socket.io");
const cors = require('cors');
app.use(cors());


const server = http.createServer(app); // initialize server
const io = socketIO(server); // create socket using server ^

const loggedInUsers = {}

io.on("connection", socket => {

    socket.on('welcome.index', (userLogin, respond) => {
        console.log(`New user created:`)
        //console.log(userLogin)
        Player.create({name: userLogin.state.username, description: userLogin.state.description, avatar: userLogin.state.avatar})
            .then( user => {
                io.emit('users.new',user)
                respond(userLogin)
                //console.log(socket.id)
                //console.log(user.id)
                loggedInUsers.socketId = user.id
                //console.log(loggedInUsers)
                //console.log(loggedInUsers.socketId)
                //console.log(loggedInUsers[socket.id])
                //console.log(user.id)
            })
    })

    socket.on('users.index', async (users, respond) => {
        //console.log(users)
        let players = await Player.findAll()
        //console.log(players)
        respond(players)
    })

    
    socket.on('canvas.update',(stateURL) => {
        //console.log(socket.id)
        //console.log(stateURL)
        //console.log(loggedInUsers.socketId)
        Player.findByPk(loggedInUsers.socketId)
            .then((playerData) => {
                //console.log(pl)
                console.log('Player Data:')
                console.log(playerData)
                playerData.update({
                   canvasData: stateURL
                })

            })
            io.emit('canvas.draw', stateURL)
            console.log('emit canvas')
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