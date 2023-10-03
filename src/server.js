const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Load the credentials from your JSON key file
const keyFile = require('./datsol-h-35038aa76b14.json'); // Replace with the correct path to your JSON key file

// Initialize the Google Sheets API client
const sheets = google.sheets('v4');
const auth = new google.auth.GoogleAuth({
  credentials: keyFile,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Define a route to handle form submissions
app.post('/api/submit-contact-form', async (req, res) => {
  try {
    const { name, businessEmail, businessName, phoneNumber, message } = req.body;
    const sheetsResponse = await sheets.spreadsheets.values.append({
      auth: await auth.getClient(),
      spreadsheetId: '1Q6zVgheVzM4VqJclIo9SxI5Nj1A6vBN4Gapwt37Psew',
      range: 'Form Responses 1', // Replace with your sheet name or range
      valueInputOption: 'RAW',
      resource: {
        values: [[name, businessEmail, businessName, phoneNumber, message]],
      },
    });

    if (sheetsResponse.status === 200) {
      console.log('Data appended to Google Sheets.');
      res.status(200).send('Form submitted successfully.');
    } else {
      console.error('Error appending data to Google Sheets.');
      res.status(500).send('Error submitting the form.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Error submitting the form. Please check the server logs for more information.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
