const express = require('express');
const cors = require('cors');

// creates a process.env object with keys/values from .env
require('dotenv').config();
const app = express();

app.use(cors());
const STRIPE_KEY = process.env.STRIPE_KEY;
const PORT = process.env.PORT;

// https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs

app.get('/', (req, resp) => {
  resp.json('Wellcome to clothing-shop little api');
});

app.get('/stripe', (req, resp) => {
  resp.json(STRIPE_KEY);
});

app.listen(PORT, () => {
    console.log('Listening to PORT: ', PORT)
});