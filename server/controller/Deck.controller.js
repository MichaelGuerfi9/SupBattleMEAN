const Deck = require('../model/Deck.model')
const User = require('../model/User.model')

module.exports = {
    createDeck: (req,res) => {
        if (req.body) {
            var deckData = {
                cards: [req.body[1],req.body[2],req.body[3]],
                userId: req.body[0].userId
            }
            //use schema.create to insert data into the db
            Deck.create(deckData, function (err, user) {
                if (err) {
                return res.send(err)
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
        var query = req.query.user
        Deck.find({userId:query})
        .exec()
        .then(deck => {
            if(deck === null){
                return res.status(500).json({error:1,message:'Aucun deck trouvé'})
            }
            res.json(deck)
        })
        .catch(err => res.status(500).json({error:1, message:err.message}))
    }
}