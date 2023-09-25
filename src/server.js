require('dotenv').config();
const cors = require('cors');

const express = require('express');
const { getMeetups } = require('./controllers/getMeetups');

const app = express();

app.use(express.json());
app.use(cors());
const { PORT } = process.env;

// endopints users
app.get('/', getMeetups);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
