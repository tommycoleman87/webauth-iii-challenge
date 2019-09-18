const db = require('../data/db-config');

module.exports = {
    registerUser,
    findUser
}

function registerUser(user){
    return db('users').insert(user).then(result => {
        return result;
    })
}

function findUser(username) {
    return db('users').where({username}).first().then(user => user)
}