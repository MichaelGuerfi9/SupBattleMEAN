module.exports= function(app){
    const Card = require('./Card.controller')
    app.get('/card',Card.getRandomCard)
    app.post('/newCard',Card.createCard)
}