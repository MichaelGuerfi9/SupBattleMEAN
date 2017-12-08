var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    cardType: {
        type: String,
        required: true,
    },
    quality: {
        type: String,
        required: true,
    },
    mana: {
        type: Number,
        required: true,
    },
    attack: {
        type: Number,
    },
    health: {
        type: Number,
    },
    effect: {
        type : String,
    }
})

var Card = mongoose.model('Card', CardSchema);
module.exports = Card;