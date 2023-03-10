const mongoose = require('../../database');

const ChatSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
        },
        contactProfilePicture: {
            type: String,
        },
        contactName: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        contactStatus: {
            type: String,
        },
        contactEmail: {
            type: String,
        },
        message: {
            type: String,
        },
    },
    { timestamps: true }
);

const LiveChat = mongoose.model('LiveChat', ChatSchema);

module.exports = LiveChat;
