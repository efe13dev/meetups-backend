require('dotenv').config();
const cors = require('cors');

const express = require('express');
const getMeetups = require('./controllers/meetups/getMeetups.js');
const createMeetup = require('./controllers/meetups/createMeetup.js');
const getMeetupById = require('./controllers/meetups/getMeetupById.js');

const app = express();

app.use(express.json());
app.use(cors());
const { PORT } = process.env;

// endopints meetups
app.get('/meetups', getMeetups);
app.post('/meetups', createMeetup);
app.get('/meetup/:id', getMeetupById);
// app.delete('/meetups/:id', deleteMeetup);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
