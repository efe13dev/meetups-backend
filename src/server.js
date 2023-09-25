const getmeetups = require('./controllers/getMeetups.js');
const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
const { PORT } = process.env;

// endopints users
app.get('/', getmeetups);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
