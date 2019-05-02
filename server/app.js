const Player = require('./models/Player')
const app = require('express')();
const cors = require('cors');
app.use(cors());

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
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

