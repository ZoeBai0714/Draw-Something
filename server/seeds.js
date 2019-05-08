const Player = require('./models/Player');


// const initPlayerTable = async () => {
//     await Player.sync()
// }
// initPlayerTable()

(async function(){
    await Player.sync()
})()
