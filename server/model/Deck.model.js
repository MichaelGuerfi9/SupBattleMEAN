
var mongoose = require('mongoose');

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var DeckSchema = new mongoose.Schema({
    cards : {
        type: Array,
        "default": [],
    },
    userId :{
        type: ObjectId,
        required: true,
    }
})

var Deck = mongoose.model('Deck',DeckSchema);
module.exports = Deck;