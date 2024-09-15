const deleteMeetupById = require('../../model/meetups/deleteMeetupById.js');
const selectMeetupById = require('../../model/meetups/selectMeetupById.js');

const deleteMeetup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const meetup = await selectMeetupById(id);

    if (!meetup)
      return res
        .status(404)
        .send({ status: 'error', message: `Meetup id:${id} not found` });

    await deleteMeetupById(id);

    res.status(200).send({ status: 'ok', message: `Meetup id:${id} deleted` });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteMeetup;
