const app = require('express')();

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})


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

