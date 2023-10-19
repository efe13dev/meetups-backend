require('dotenv').config();
const cors = require('cors');

const express = require('express');
const fileUpload = require('express-fileupload');

const getMeetups = require('./controllers/meetups/getMeetups.js');
const createMeetup = require('./controllers/meetups/createMeetup.js');
const getMeetupById = require('./controllers/meetups/getMeetupById.js');
const deleteMeetup = require('./controllers/meetups/deleteMeetup.js');

const getUsers = require('./controllers/users/getUsers.js');
const createUser = require('./controllers/users/createUser.js');
const loginUser = require('./controllers/users/loginUser.js');
const deleteUser = require('./controllers/users/deleteUser.js');

const createInscription = require('./controllers/inscriptions/createInscription.js');
const dropInscription = require('./controllers/inscriptions/dropInscription.js');

const validateAuth = require('./middlewares/validateAuth.js');
const handleNotFound = require('./middlewares/handleNotFound.js');
const handleError = require('./middlewares/handleError.js');

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(express.static('docs/images'));
const { PORT } = process.env;

// endpoints users
app.get('/users', validateAuth, getUsers);
app.post('/users', createUser);
app.delete('/users/:id', deleteUser);
app.post('/login', loginUser);

// endopints meetups
app.get('/meetups', getMeetups);
app.post('/meetups', validateAuth, createMeetup);
app.get('/meetup/:id', getMeetupById);
app.delete('/meetup/:id', deleteMeetup);

// endpoints inscriptions
app.post('/inscription/:id', validateAuth, createInscription);
app.delete('/inscription/:id', validateAuth, dropInscription);

app.use(handleNotFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
