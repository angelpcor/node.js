const Model = require("./model.js");

//

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save()
}

async function listUsers(user) {
    const messages = await Model.find();
    return messages
}


module.exports = {
    add: addUser,
    list: listUsers,
}