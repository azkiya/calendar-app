
const express = require('express');
const router = express.Router();
const mailjet = require('node-mailjet')

// Route untuk mengirim email
router.post('/send-email', async (req, res) => {
        const { senderEmail, recipientEmail } = req.body;
        try {
                const request = mailjet
                        .apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
                        .post('send', { version: 'v3.1' })
                        .request({
                                Messages: [
                                        {
                                                From: {
                                                        Email: senderEmail || process.env.SENDER_EMAIL, // Ambil email pengirim dari request atau environment
                                                        Name: 'Me',
                                                },
                                                To: [
                                                        {
                                                                Email: recipientEmail || process.env.RECIPIENT_EMAIL, // Ambil email penerima dari request atau environment
                                                                Name: 'You',
                                                        },
                                                ],
                                                Subject: 'Testing send calendar',
                                                TextPart: 'Greetings from Mailjet!',
                                                HTMLPart:
                                                        '<h3>Hi Salam Kenal</h3>',
                                        },
                                ],
                        });

                const result = await request;
                console.log(result.body);
                res.status(200).json({ message: 'Email sent successfully!', data: result.body });
        } catch (err) {
                console.error(err.statusCode);
                res.status(500).json({ error: 'Failed to send email', details: err });
        }
})

module.exports = router;