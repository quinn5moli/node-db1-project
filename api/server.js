const express = require("express");

const accountsRoutes = require('./accounts/accounts-router')

const server = express();

server.use(express.json());
server.use('/api/accounts', accountsRoutes)

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'cannot be found, may not exist'
    })
})

module.exports = server;
