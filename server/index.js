require('colors')
const express = require('express')
const mongoose = require('mongoose')
const util = require('util')
var session = require('express-session')

// Création d'une application ExpressJS
const app = express()
const bodyParser = require('body-parser')


app.use('/',bodyParser.json())

app.use("/", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next()
});

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));

var deckRoutes = require('./routes/DeckRoutes');
deckRoutes(app);
var userRoutes = require('./routes/UserRoutes');
userRoutes(app);
var cardRoutes = require('./routes/CardRoutes');
cardRoutes(app);

app.set('ip', 'localhost')
app.set('port', 3000)

// Indique à Mongoose que les promesses à utiliser sont celles par défaut dans Node.js (objet global)
mongoose.Promise = global.Promise

// Transformation de la méthode app.listen() d'Express en "Promesse JS"
const appListen = (app, port, ip) => {
    return new Promise((resolve, reject) => {
        app.listen(port, ip, resolve)
    })
}
var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

console.log(addresses);

// Connexion à la base de données MONGO,
mongoose
    .connect('mongodb://localhost:27017/supbattle', {useMongoClient:true})
    .then( () => console.log('MongoDB : Connexion établie'.bgGreen) )
    .then( appListen(app, app.get('port'), app.get('ip')) )
    .then( () => console.log(` App Started on ${addresses} http://${app.get('ip')}:${app.get('port')} `.bgGreen) )
    .catch(err => console.log(err.message.red))