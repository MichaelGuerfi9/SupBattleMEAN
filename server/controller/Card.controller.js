const Card  = require('../model/Card.model')
const User = require('../model/User.model')

module.exports = {
    createCard: (req,res) => {
        if (req.body) {
            var cardData = {
                name: req.body.name,
                description: req.body.description,
                photo: req.body.photo,
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
            query = req.query.userConnected;
            var result = query.slice(1, -1);
            console.log(result)
            Card.count().exec(function (err, count) {
                Card.findOne({}).skip(Math.random()*count)
                .exec()
                .then(card => {
                    if(card === null){
                        return res.status(500).json({error:1,message:'Aucune carte trouvée'})
                    }
                    User.findByIdAndUpdate(
                        result,
                        {$push: {cards:card}},
                        {safe: true, upsert: true},
                        function(err, model) {
                            console.log(err);
                        })
                    res.json(card)
                })
            })
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