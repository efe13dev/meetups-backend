require('dotenv').config();
const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');

//Meetups
const createMeetup = require('./controllers/meetups/createMeetup.js');
const deleteMeetup = require('./controllers/meetups/deleteMeetup.js');
const getMeetups = require('./controllers/meetups/getMeetups.js');
const getMeetupById = require('./controllers/meetups/getMeetupById.js');

//Users
const createUser = require('./controllers/users/createUser.js');
const deleteUser = require('./controllers/users/deleteUser.js');
const loginUser = require('./controllers/users/loginUser.js');
const getUsers = require('./controllers/users/getUsers.js');

//Inscriptions
const createInscription = require('./controllers/inscriptions/createInscription.js');
const dropInscription = require('./controllers/inscriptions/dropInscription.js');

//Middlewares
const validateAuth = require('./middlewares/validateAuth.js');
const handleNotFound = require('./middlewares/handleNotFound.js');
const handleError = require('./middlewares/handleError.js');

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(express.static('uploads/images'));
app.use(express.static('./public'));

const { PORT } = process.env;

// endpoints users
app.post('/users', createUser);
app.delete('/users/:id', deleteUser);
app.post('/login', loginUser);
app.get('/users', validateAuth, getUsers);

// endopints meetups
app.post('/meetups', validateAuth, createMeetup);
app.delete('/meetup/:id', deleteMeetup);
app.get('/meetups', getMeetups);
app.get('/meetup/:id', getMeetupById);

// endpoints inscriptions
app.post('/inscription/:id', validateAuth, createInscription);
app.delete('/inscription/:id', validateAuth, dropInscription);

app.use(handleNotFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
