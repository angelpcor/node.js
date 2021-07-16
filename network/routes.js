const express = require('express');
const message = require('../components/message/network.js');
const chat = require('../components/chat/network.js');
const user = require('../components/user/network.js');

const routes = function (server) {
    server.use("/message", message);
    server.use("/user", user);
    server.use("/chat", chat);
}

module.exports = routes;