const Player = require('./models/Player')



const players = [
    {
        "name": "Bobby",
        "avatar":"a link ",
        "description": "I cannot draw to save my life. But I can laugh at what I draw."
        
    },
    {
        "name": "Jack",
        "avatar":"a link ",
        "description": "I secretly go to art events on the weekends."
    },
    {
        "name": "Zoe",
        "avatar": "./avatars/zoe.png",
        "description": "I'm the most skilled artist here."
    },
    {
        "name": "Josh",
        "avatar":"a link ",
        "description": "I make beautiful things through code and food."
    }
];

(async function(){
    await Player.drop()
    await Player.sync()
    await Player.destroy({ where: {  }})
    players.forEach( player => Player.create(player) )
})()