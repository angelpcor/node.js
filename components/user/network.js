const express = require('express');
const router = express.Router();
const response = require('../../network/response.js');
const controller = require('./controller.js');


router.post('/', function (req, res) {
    controller.addUser(req.body.name, res)
        .then(data => {
            response.success(req, res, data, 201);
        }).catch(error => {
            response.error(req, res, "Internal Error", 500, error);
        })
});

router.get('/', function (req, res) {
    controller.getUsers()
        .then((userList) => {
            response.success(req, res, userList, 200);
        })
        .catch((err) => {
            response.error(req, res, "Unexpected error", 500, err);
        });
})

module.exports = router;