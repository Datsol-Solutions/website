// email.js

const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail'
  auth: {
    user: 'harshithanakda2002@gmail.com',
    pass: 'HoneyNakda02%',
  },
});

// Function to send an email
async function sendEmail(name, email, message) {
  const mailOptions = {
    from: 'harshithanakda2002@gmail.com',
    to: email,
    subject: 'Thank you for contacting us',
    text: `Dear ${name},\n\nThank you for reaching out to us. Your message has been received and will be addressed soon.\n\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email', error);
  }
}

module.exports = sendEmail;
