const User = require('../model/User.model')

module.exports = {
    authenticate: (req,res) => {
        if (req.body.email &&
            req.body.password) {
                User.authenticate(req.body.email,req.body.password, function(err,user){
                    if(err || !user){
                        var error = new Error('Wrong credentials')
                        error.status = 401
                        return res.status(error.status).send(error)
                    }
                    else
                    {
                        req.session.userId = user._id;
                        console.log(req.session.userId)
                        res.send(user._id)
                    }
                })
            }
    },
    register: (req,res,next) => {
        if (req.body.email &&
            req.body.username &&
            req.body.password) {
            var userData = {
              email: req.body.email,
              username: req.body.username,
              password: req.body.password,
            }
            //use schema.create to insert data into the db
            User.create(userData, function (err, user) {
              if (err) {
                return res.send(err)
              } else {
                return res.send(user._id);
              }
            });
          }
          else{
              res.send('Gone wrong')
          }
    },
    logout: (req, res, next) => {
        if (req.session) {
          // delete session object
          req.session.destroy(function(err) {
            if(err) {
              return next(err);
            } else {
              return res.redirect('/');
            }
          });
        }
      },
    requiresLogin: (req, res, next) => {
        if (req.session && req.session.userId) {
            return next();
          } else {
            return res.redirect('/login');
            // var err = new Error('You must be logged in to view this page.');
            // err.status = 401;
            // return next(err);
          }
    },
    // getCard: (req, res, next) => {
    //   var user = req.user
    //   if(user){

    //   }
    //   else{
    //     return res.status(500).json({error:1,message:'Veuillez vous connecter'})
    //   }
    // },
    getAllCards: (req, res) => {
        var user = req.query.user;
        // var query = {_id : user}
        User.find({_id: user},{_id:0,cards:1})
            .exec()
            .then(user => {
                if(user === null){
                    return res.status(500).json({error:1,message:'Aucune carte trouvée'})
                }
                res.json(user)
            })
            .catch(err => res.status(500).json({error:1, message:err.message}))
    },
  }