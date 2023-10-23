const express = require('express');
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3001;

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = 'token.json'; // You should set this to a secure location

const credentials = require('./client_secret_433688477002-spua15d5hdm149tgfl21qkbf0lmc71r6.apps.googleusercontent.com.json'); // Load your credentials JSON file

// Create an OAuth2 client
const oAuth2Client = new OAuth2Client(
  credentials.installed.client_id,
  credentials.installed.client_secret,
  credentials.installed.redirect_uris[0]
);

// Authorize the client
oAuth2Client.setCredentials({ refresh_token: credentials.installed.refresh_token });

// Initialize Google Sheets API
const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
const spreadsheetId = '1gKgw9CY10FbPUuBu3uEFs4gkD-MLtciWrUGhkCtcPvM'; // Replace with your Google Sheet ID
const range = 'A1'; // The cell where you want to start appending data

// Body parser middleware to parse JSON data from requests
app.use(bodyParser.json());

// API route to accept user data
app.post('/submit-data', async (req, res) => {
  const userData = req.body;

  // Append user data to the Google Sheet
  const valueInputOption = 'RAW';
  const resource = {
    values: [Object.values(userData)],
  };

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });
    console.log('Data appended to the Google Sheet:', response.data);
    res.status(200).json({ message: 'Data appended to the Google Sheet successfully.' });
  } catch (error) {
    console.error('Error appending data: ' + error);
    res.status(500).json({ error: 'Error appending data: ' + error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
