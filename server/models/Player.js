const Sequelize = require('sequelize');
const { STRING, INTEGER } = Sequelize


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});


const Player = sequelize.define('player', {
    name: {
        type: STRING,
    },
    avatar: {
        type: STRING
    },
    description:{
        type: STRING
    }
});

module.exports = Player
