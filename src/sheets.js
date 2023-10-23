const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = 'token.json'; // You can choose any secure location for this file

const credentials = require('./client_secret_433688477002-spua15d5hdm149tgfl21qkbf0lmc71r6.apps.googleusercontent.com.json'); // Load your credentials JSON file

// Create an OAuth2 client
const oAuth2Client = new OAuth2Client(
  credentials.installed.client_id,
  credentials.installed.client_secret,
  credentials.installed.redirect_uris[0]
);

// Authorize the client
oAuth2Client.setCredentials({ refresh_token: credentials.installed.refresh_token });

async function appendDataToSheet(data) {
    const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
    const spreadsheetId = '1gKgw9CY10FbPUuBu3uEFs4gkD-MLtciWrUGhkCtcPvM'; // Replace with your Google Sheet ID
    const range = 'A1'; // The cell where you want to start appending data
  
    const valueInputOption = 'RAW';
  
    const resource = {
      values: [Object.values(data)],
    };
  
    try {
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption,
        resource,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('The API returned an error: ' + error);
      throw error;
    }
  }
  