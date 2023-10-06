const selectMeetupById = require('../../model/meetups/selectMeetupById');
const getMeetupById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const meetup = await selectMeetupById(id);
    console.log(meetup);
    res.status(200).send({ status: 'ok', meetup });
  } catch (error) {
    next(error);
  }
};
module.exports = getMeetupById;
