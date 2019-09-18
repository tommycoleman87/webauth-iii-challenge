const express = require('express');
const router = express.Router();
const Users = require('./restrictedHelper');
router.get('/users', (req, res) => {
    Users.getUsers()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
module.exports = router;