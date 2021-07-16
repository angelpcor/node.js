const Model = require('./model');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = { user: filterUser }
        }
        Model.find(filter)
            .populate("user")
            .exec((error, populatedData) => {
                if (error) {
                    reject(error);
                    return false;
                }

                resolve(populatedData);
            });
    })
}

async function deleteMessage(id) {
    return Model.deleteOne({ _id: id });
}

async function updateText(id, message) {
    const result = await Model.findOne({ _id: id });
    result.message = message;
    const newMessage = await result.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateText,
    remove: deleteMessage,
}