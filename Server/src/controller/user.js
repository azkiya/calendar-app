const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/user');
const SECRET_KEY = process.env.SECRET_KEY;

exports.create = async (req, res) => {
        try {
                const { name, email, password } = req.body;
                const newUser = new User({ name, email, password });
                await newUser.save();
                res.status(201).json(newUser);
        } catch (err) {
                return res.send(err);
        }
}

exports.authenticate = async (req, res) => {
        try {
                const userData = await User.findOne({ email: req.body.email });

                if (!userData) {
                        return res.status(404).json({
                                status: "error",
                                message: "Email address not found",
                                data: null
                        });
                }

                // Compare passwords
                const isMatch = await bcrypt.compare(req.body.password, userData.password);
                if (isMatch) {
                        const token = jwt.sign({ id: userData._id }, SECRET_KEY, { expiresIn: '1h' });

                        req.session.userId = userData._id;
                        req.session.token = token;

                        res.json({
                                status: "success",
                                data: { user: userData, token: token }
                        });
                } else {
                        res.status(401).json({
                                status: "error",
                                message: "Password does not match",
                                data: null
                        });
                }
        } catch (err) {
                res.status(500).json({ error: err.message });
        }
}

exports.logout = async (req, res) => {
        try {
                if (req.session) {
                        req.session.destroy(err => {
                                if (err) {
                                        return res.status(500).json({ error: 'Logout failed' });
                                }
                                res.json({
                                        status: "success",
                                        message: "Logged out successfully"
                                });
                        });
                } else {
                        res.status(400).json({ error: 'No active session found' });
                }
        } catch (err) {
                res.status(500).json({ error: err.message });
        }
}