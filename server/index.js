require('colors')
const express = require('express')
const mongoose = require('mongoose')
const util = require('util')


// Création d'une application ExpressJS
const app = express()
const bodyParser = require('body-parser')

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.use('/',bodyParser.json())

app.use("/", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next()
});

const User = require('./User.model')

app.post("/register", (req, res, next) => {
    if (req.body.email &&
        req.body.username &&
        req.body.password) {
        var userData = {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        }
        //use schema.create to insert data into the db
        User.create(userData, function (err, user) {
          if (err) {
            return res.send(err)
          } else {
            return res.send('Hello world');
          }
        });
      }
      else{
          res.send('Gone wrong')
      }

})

// app.get('/collaborateurs', collaborateur.findAll)
// app.get('/collaborateur/:id', collaborateur.findOne)
// app.post('/collaborateur',collaborateur.create)
// app.put('/collaborateur/:id', collaborateur.update)
// app.delete('/collaborateur/:id', collaborateur.delete)

/*
    Configuration
*/

app.set('ip', 'localhost')
app.set('port', 1337)

// Indique à Mongoose que les promesses à utiliser sont celles par défaut dans Node.js (objet global)
mongoose.Promise = global.Promise

// Transformation de la méthode app.listen() d'Express en "Promesse JS"
const appListen = (app, port, ip) => {
    return new Promise((resolve, reject) => {
        app.listen(port, ip, resolve)
    })
}

// Connexion à la base de données MONGO,
mongoose
    .connect('mongodb://localhost:27017/supbattle', {useMongoClient:true})
    .then( () => console.log('MongoDB : Connexion établie'.bgGreen) )
    .then( appListen(app, app.get('port'), app.get('ip')) )
    .then( () => console.log(` App Started on http://${app.get('ip')}:${app.get('port')} `.bgGreen) )
    .catch(err => console.log(err.message.red))