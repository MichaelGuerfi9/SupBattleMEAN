import { ObjectId } from '../../../Library/Caches/typescript/2.6/node_modules/@types/bson';

var mongoose = require('mongoose');

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