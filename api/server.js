const express = require('express');

const server = express();
const restrictedMiddleware = require('../middleware/restrictedMiddleware');
const authRoutes = require('../auth/authRouter');
const restrictedRoutes = require('../restricted/restrictedRouter');
server.use(express.json());
server.use('/api', authRoutes);
server.use('/api/restricted',restrictedMiddleware,restrictedRoutes);

module.exports = server;