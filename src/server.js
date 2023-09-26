require('dotenv').config();
const cors = require('cors');

const express = require('express');
const { getMeetups } = require('./controllers/meetups/getMeetups.js');

const app = express();

app.use(express.json());
app.use(cors());
const { PORT } = process.env;

// endopints meetups
app.get('/meetups', getMeetups);

app.post('/meetups', createMeetup);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
