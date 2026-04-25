const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('Testing connection for:', process.env.EMAIL_USER);
console.log('Password length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

transporter.verify(function (error, success) {
    if (error) {
        console.log('Verification failed:');
        console.log(error);
    } else {
        console.log('Verification successful! The credentials are correct.');
    }
    process.exit();
});
