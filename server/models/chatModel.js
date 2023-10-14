const mongoose = require('mongoose');

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',  // Changed 'Messages' to 'Message' to match typical Mongoose model naming convention
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",  // Changed 'user' to 'User' to match the ref in the users array
        }
    },
    {
        timestamps: true,  // Changed 'timeStamps' to 'timestamps' to match Mongoose's built-in timestamps option
    }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
