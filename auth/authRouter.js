const express = require('express');
const router = express.Router();
const AuthHelpers = require('./authHelpers');
const bcrypt = require('bcryptjs');
const jwt = require('../middleware/tokenGenerator');
router.post('/register', (req, res) => {
    const user = req.body;
    const hashedPassword = bcrypt.hashSync(user.password, 14);
    user.password = hashedPassword;
    AuthHelpers.registerUser(user)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(500).json(err);
        console.log(err)
    })
})

router.post('/login', (req, res) => {
    const {username, password }= req.body;
    AuthHelpers.findUser(username)
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = jwt.tokenGenerator(user);
            res.status(200).json({token})
        } else {
            res.status(401).json({message: 'Invalid credentials'})
        }
    })
    .catch(err => {
        res.status(500).json(err)
        console.log(err)
    })
})
module.exports = router;