const Deck = require('../model/Deck.model')
const User = require('../model/User.model')
var mongoose = require('mongoose');

module.exports = {
    createDeck: (req,res) => {
        if (req.body) {
            var query = req.body.userId;
            var user = query.slice(1, -1);
            var deckData = {
                cards: req.body.deck,
                userId: mongoose.Types.ObjectId(user),
                deckName: req.body.deckName
            }

            //use schema.create to insert data into the db
            Deck.create(deckData, function (err, user) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({error:1,message:err})
                    } else {
                    return res.send('Deck Created');
                    }
            });
            }
            else{
                res.send('Gone wrong')
            }
    },
    updateDeck: (req, res) => {
        Deck.findByIdAndUpdate(req.params.id,req.body,{new:true})
            .exec()
            .then(deck => {
                if(deck === null){
                    return res.status(200).json({error:1,message:'Aucun deck trouvé'})
                }res.json({success:1, message:'Deck modifié', inserted:deck})})
            .catch(err => res.status(500).json({error:1, message:err.message}))
    },
    deleteDeck: (req, res) => {
        Deck.findByIdAndRemove(req.params.id)
            .exec()
            .then(deck => {
                if(deck === null){
                    return res.status(500).json({error:1,message:'Aucun deck trouvé'})
                }
            res.json({success:1, message:'Deck supprimé'})})
            .catch(err => res.status(500).json({error:1, message:err.message}))
    },
    getDecks: (req,res) => {
        var query = req.query.userConnected
        var user = query.slice(1, -1);
        var decks = [];
        Deck.find({userId:user})
        .exec()
        .then(deck => {
            if(deck === null){
                return res.status(500).json({error:1,message:'Aucun deck trouvé'})
            }
            deck.forEach(element => {
                element.cards.push({'deckName':element.deckName})
                element.cards.push({'id':element._id})
                decks.push(element.cards);
            });
            res.json(decks)
        })
        .catch(err => res.status(500).json({error:1, message:err.message}))
    }
}