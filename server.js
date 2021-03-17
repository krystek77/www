require('dotenv').config();
const path = require('path');
const fetch = require('node-fetch');
const clientMailchimp = require('@mailchimp/mailchimp_marketing');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

clientMailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

app.post('/subscribe', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.json({ messege: 'Failed' });
    return;
  }
  try {
    const response = await clientMailchimp.lists.batchListMembers(
      '1fac6de29a',
      {
        members: [
          {
            email_address: email,
            status: 'subscribed',
            email_type: 'html',
            merge_fields: { FNAME: name },
          },
        ],
      }
    );
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () =>
  console.log(`HTTP Server is running now. http://${HOST}:${PORT}`)
);
