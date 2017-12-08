module.exports= function(app){
    const Card = require('../controller/Card.controller')
    app.get('/card',Card.getRandomCard)
    app.post('/newCard',Card.createCard)
    app.get('/cards',Card.fetchAll)
}