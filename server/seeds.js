const Player = require('./models/Player')

Player.sync()

//Player.destroy({ where: { id: [1] }})

const players = [
    {
        "name": "Bobby",
        "avatar":"a link ",
        "wins": 0
        
    },
    {
        "name": "Jack",
        "avatar":"a link ",
        "wins": 0
    },
    {
        "name": "Zoe",
        "avatar":"a link ",
        "wins": 0
    },
    {
        "name": "Josh",
        "avatar":"a link ",
        "wins": 0
    }
]

players.forEach( player => Player.create(player) )