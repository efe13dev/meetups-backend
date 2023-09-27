const selectMeetupById = require('../../model/meetups/selectMeetupById');
const getMeetupById = async (req, res) => {
  const { id } = req.params;
  const meetup = await selectMeetupById(id);
  res.status(200).send({ status: 'ok', meetup });
};
module.exports = getMeetupById;
