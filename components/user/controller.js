const store = require('./store');

function addUser(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            console.error("[user-controller] User not specified");
            return reject("Incorrect Data");
        }

        const user = {
            user: name,
        };

        store.add(user);
        resolve(user);
    })
}

function getUsers(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

module.exports = {
    addUser,
    getUsers,
}