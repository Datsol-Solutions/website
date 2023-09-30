const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure nodemailer with your email service provider
const transporter = nodemailer.createTransport({
  service: 'your-email-service-provider', // e.g., 'Gmail'
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

// Define an API endpoint for sending emails
app.post('/sendEmail', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Send email
    await transporter.sendMail({
      from: 'your-email@example.com',
      to: email,
      subject: 'Subject of the Email',
      text: `Dear ${name},\n\n${message}`,
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
