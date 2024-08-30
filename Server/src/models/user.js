const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const saltRounds = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
        name: {
                type: String,
                required: true,
        },
        email: {
                type: String,
                required: true
        },
        password: {
                type: String,
                required: true
        }
});


// hash user password before saving into database
// Hash user password before saving into database
UserSchema.pre('save', async function (next) {
        if (this.isModified('password')) {
                try {
                        this.password = await bcrypt.hash(this.password, saltRounds);
                        next();
                } catch (error) {
                        next(error);
                }
        } else {
                next();
        }
});

module.exports = mongoose.model('User', UserSchema);