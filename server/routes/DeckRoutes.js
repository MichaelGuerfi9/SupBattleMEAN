module.exports = function(app) {
    const Deck = require('../controller/Deck.controller')
    app.post('/createDecks',Deck.createDeck)
    app.put('/editDeck/:id',Deck.updateDeck)
    app.delete('/deleteDeck/:id',Deck.deleteDeck)
    app.get('/decks',Deck.getDecks)
}