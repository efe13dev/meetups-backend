require('dotenv').config();
const cors = require('cors');

const express = require('express');

const getMeetups = require('./controllers/meetups/getMeetups.js');
const createMeetup = require('./controllers/meetups/createMeetup.js');
const getMeetupById = require('./controllers/meetups/getMeetupById.js');
const deleteMeetup = require('./controllers/meetups/deleteMeetup.js');

const createUser = require('./controllers/users/createUser.js');
const loginUser = require('./controllers/users/loginUser.js');
const deleteUser = require('./controllers/users/deleteUser.js');

const validateAuth = require('./middlewares/validateAuth.js');
const handleNotFound = require('./middlewares/handleNotFound.js');
const handleError = require('./middlewares/handleError.js');

const app = express();

app.use(express.json());
app.use(cors());
const { PORT } = process.env;

// endpoints users
app.post('/users', createUser);
app.delete('/users/:id', deleteUser);
app.post('/login', loginUser);

// endopints meetups
app.get('/meetups', getMeetups);
app.post('/meetups', validateAuth, createMeetup);
app.get('/meetup/:id', getMeetupById);
app.delete('/meetup/:id', deleteMeetup);

app.use(handleNotFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
