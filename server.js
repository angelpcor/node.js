const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response.js');
const router = require('./network/routes.js');
const db = require('./db');

db("mongodb://db_user_achro:db_user_achro@cluster0-shard-00-00.c8xsz.mongodb.net:27017,cluster0-shard-00-01.c8xsz.mongodb.net:27017,cluster0-shard-00-02.c8xsz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ko23xd-shard-0&authSource=admin&retryWrites=true&w=majority")

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static(`public`));


app.listen(3000);
console.log("App listening in http://localhost:3000");