const express = require('express');

var app = express();

app.use("/", function (req, res) {
    res.send("Test");
});

app.listen(3000, function (req, res) { });
console.log("App listening in http://localhost:3000");