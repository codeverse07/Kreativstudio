require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const nodemailer = require('nodemailer');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Transporter setup
console.log('Attempting to connect with:', process.env.EMAIL_USER);
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
        user: process.env.EMAIL_USER || 'itsharsh0624@gmail.com',
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log('Server connection error:', error);
        console.log('Check if EMAIL_USER and EMAIL_PASS are correctly set in .env');
    } else {
        console.log('Server is ready to take our messages');
    }
});

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const mailOptions = {
        from: email,
        to: 'itsharsh0624@gmail.com',
        subject: `New Portfolio Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to itsharsh0624@gmail.com');
        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
