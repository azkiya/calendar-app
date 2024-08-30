
module.exports = function (app) {
        const user = require('../controller/user');

        // resigter new user Routes
        app.route('/api/register')
                .post(user.create);

        // login user Routes
        app.route('/api/login')
                .post(user.authenticate);

        app.route('/api/logout')
                .get(user.logout);

};