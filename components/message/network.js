const express = require('express');
const router = express.Router();
const response = require('../../network/response.js');
const controller = require('./controller.js');

router.get('/', function (req, res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((err) => {
            response.error(req, res, "Unexpected error", 500, err);
        });
})

router.post('/', function (req, res) {

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 200);
        })
        .catch(e => {
            response.error(req, res, "Informacion Invalida", 400, "Login error");
        });
})

router.patch('/:id', function (req, res) {
    console.log(req.params.id);

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, `Mensaje ${req.params.id} editado`, 200);
        }).catch(error => {
            response.error(req, res, "Error interno", 500);
        })

    res.send("Ok");
});

router.delete('/:id', function (req, res) {

    controller.deleteMessage(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(error => {
            response.error(req, res, "Unknown error", 500);
        })
})

module.exports = router;