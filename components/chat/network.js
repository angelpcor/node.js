const express = require('express');
const router = express.Router();
const response = require('../../network/response.js');
const controller = require('./controller.js');

router.post('/', function (req, res) {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, "Internal Error", 500, err);
        })
})

router.get('/', function (req, res) {
    controller.listChats(req.params.userId)
        .then(users => {
            response.success(req, res, users, 201);
        })
        .catch(err => {
            response.error(req, res, "Internal Error", 500, err);
        })
})

module.exports = router;