const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
        email: {
                type: String,
                required: true,
        },
        description: {
                type: String,
                default: null
        },
        date: {
                type: Date,
                required: true,
        },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
