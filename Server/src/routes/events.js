const express = require('express');
const Event = require('../models/event');
const router = express.Router();


router.post('/events', async (req, res) => {
        const { email, start, end } = req.body;

        try {
                const newEvent = new Event({ email, start, end });
                await newEvent.save();
                res.status(201).json(newEvent);
        } catch (error) {
                res.status(500).json({ error: 'Gagal menyimpan event' });
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
