const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
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

module.exports = mongoose.model('Event', EventSchema);
