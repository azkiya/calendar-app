module.exports = function (app) {
        const events = require('../controller/events');
        // get list events
        app.route('/api/events')
                .get(events.list)

        //create event
        app.route('/api/events')
                .post(events.create)
};