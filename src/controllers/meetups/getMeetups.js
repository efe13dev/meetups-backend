const selectMeetups = require('../../model/mettups/selectMeetups.js');

const getMeetups = async (req, res) => {
  try {
    const meetups = await selectMeetups();
    res.status(200).send({ status: 'ok', meetups });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getMeetups;
