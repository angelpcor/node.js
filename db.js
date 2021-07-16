const db = require("mongoose");

// Database connection


db.Promise = global.Promise;
async function connect(url) {
    await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, });
    console.log("[db] Connected succesfully");
}

module.exports = connect;