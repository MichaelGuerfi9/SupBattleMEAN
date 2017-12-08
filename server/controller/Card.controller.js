const Card  = require('../model/Card.model')
const User = require('../model/User.model')

module.exports = {
    createCard: (req,res) => {
        if (req.body) {
            var cardData = {
                name: req.body.name,
                description: req.body.description,
                image_url: req.body.image_url,
                cardType: req.body.cardType,
                quality: req.body.quality,
                mana: req.body.mana,
                attack: req.body.attack,
                health: req.body.health,
                effect: req.body.effect,
            }
            //use schema.create to insert data into the db
            Card.create(cardData, function (err, user) {
                if (err) {
                return res.send(err)
                } else {
                return res.send('Card Created');
                }
            });
            }
            else{
                res.send('Gone wrong')
            }
    },
    getRandomCard: (req, res) => {
        if (req.session && req.session.userId) {
            Card.count().exec(function (err, count) {
                Card.findOne({}).skip(Math.random()*count)
                .exec()
                .then(card => {
                    if(card === null){
                        return res.status(500).json({error:1,message:'Aucune carte trouvée'})
                    }
                    User.findByIdAndUpdate(
                        req.session.userId,
                        {$push: {cards:card}},
                        {safe: true, upsert: true},
                        function(err, model) {
                            console.log(err);
                        })
                    res.json(card)
                })
            })
        }
        else{
            return res.status(500).json({error:1,message:'Veuillez vous connecter'})
        }
    },
    fetchAll: (req,res) => {
        Card.find({})
        .exec()
        .then(cards => {
            if(cards === null){
                return res.status(500).json({error:1,message:'Aucune carte trouvé'})
            }
            res.json(cards)
        })
        .catch(err => res.status(500).json({error:1, message:err.message}))
    }
}