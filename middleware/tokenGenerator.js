const jwt = require('jsonwebtoken')
const secret = require('../config/secrets');
module.exports = {
    tokenGenerator
}


function tokenGenerator(user) {
    const payload = {
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret.jwtSecret, options)
}
