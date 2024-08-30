const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const email = require('./src/routes/email');
const events = require('./src/routes/events');

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// String koneksi SRV
const uri = 'mongodb+srv://fany:fanyDB@cluster0.107l7.mongodb.net/calendar?retryWrites=true&w=majority';

// Koneksi ke MongoDB Atlas menggunakan Mongoose
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})
        .then(() => console.log('Terhubung ke MongoDB Atlas'))
        .catch((err) => console.error('Gagal terhubung ke MongoDB Atlas', err));

// Route
events(app)
email(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
        console.log(`Server berjalan di port ${PORT}`);
});