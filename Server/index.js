const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

const email = require('./src/routes/email');
const event = require('./src/routes/event');
const user = require('./src/routes/user');

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())


//use sessions for tracking logins
app.use(session({
        secret: 'work hard',
        resave: true,
        saveUninitialized: false
}));

// String koneksi SRV
const uri = process.env.URI_DB;

// Koneksi ke MongoDB Atlas menggunakan Mongoose
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})
        .then(() => console.log('Terhubung ke MongoDB Atlas'))
        .catch((err) => console.error('Gagal terhubung ke MongoDB Atlas', err));

// Route
event(app)
email(app);
user(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
        console.log(`Server berjalan di port ${PORT}`);
});