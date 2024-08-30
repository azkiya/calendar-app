module.exports = function (app) {
        const events = require('../controller/event');

        app.route('/api/events')
                .get(events.list)
                .post(events.create)
};