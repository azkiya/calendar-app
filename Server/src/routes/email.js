module.exports = function (app) {
        const email = require('../controller/email');
        // send email
        app.route('/api/send-email')
                .post(email.sendmail());
};