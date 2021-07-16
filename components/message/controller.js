const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error("[message-controller] User/Message not specified");
            return reject("Incorrect Data");
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };

        store.add(fullMessage);
        resolve(fullMessage);
    })
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            console.log("[updateMessage] ID or message not specified");
            return reject("Incorrect Data");
        }

        const result = await store.update(id, message);
        resolve(result);
    })
}

function deleteMessage(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            console.log("[deleteMessage] ID not specified");
            return reject("Incorrect Data");
        }

        store.remove(id)
            .then(() => {
                resolve();
            }).catch(e => {
                reject(e);
            });
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}