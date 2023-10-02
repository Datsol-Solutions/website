// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Set up Google Sheets API
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const spreadsheetId = '1XPE7D7GDNYRijkm_ZrrNQvVlRAxV4EViFkNXeIXeB34'; // Replace with your Google Sheets document ID

const sheets = google.sheets('v4');
const sheetsAuth = new google.auth.GoogleAuth({
  keyFile: 'datsol-38eb4e32a2c7.json', // Replace with the path to your JSON key file
  scopes: SCOPES,
});

// Define a route to handle form submissions
app.post('/api/submit-contact-form', async (req, res) => {
  try {
    // Extract form data from the request body
    const { name, email, phone, query } = req.body;

    // Authenticate with Google Sheets API
    const auth = await sheetsAuth.getClient();

    // Append the form data to the Google Sheets
    const values = [[name, email, phone, query]];
    const sheetsResponse = await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: 'DATSOL contact us', // Replace with your sheet name or range
      valueInputOption: 'USER_ENTERED',
      resource: {
        values,
      },
    });

    // Check if the data was successfully appended
    if (sheetsResponse.status === 200) {
      console.log('Data appended to Google Sheets.');
      // Send a success response to the client
      res.status(200).send('Form submitted successfully.');
    } else {
      console.error('Error appending data to Google Sheets.');
      // Send an error response to the client
      res.status(500).send('Error submitting the form.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error submitting the form.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

