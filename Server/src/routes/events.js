const express = require('express');
const Event = require('../models/event');
const router = express.Router();


router.post('/events', async (req, res) => {
        const { email, description, date } = req.body;

        try {
                const newEvent = new Event({ email, description, date });
                await newEvent.save();
                res.status(201).json(newEvent);
        } catch (error) {
                // Periksa jika error adalah kesalahan validasi Mongoose
                if (error.name === 'ValidationError') {
                        const validationErrors = Object.values(error.errors).map(err => err.message);
                        res.status(400).json({ errors: validationErrors });
                } else {
                        // Tangani kesalahan lainnya
                        res.status(500).json({ error: 'Gagal menyimpan event' });
                }
        }
});

// Route untuk mengambil semua event
router.get('/events', async (req, res) => {
        try {
                const events = await Event.find();
                res.status(200).json(events);
        } catch (error) {
                res.status(500).json({ error: 'Gagal mengambil event' });
        }
});

module.exports = router;
