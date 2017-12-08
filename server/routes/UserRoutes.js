
module.exports = function(app) {
    const User = require('../controller/User.controller')
    app.post("/register",User.register)
    app.post("/login",User.authenticate)
    app.get('/logout',User.logout);
    app.get('/getCards', User.getAllCards)
}
