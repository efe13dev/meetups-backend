const insertMeetup = require('../../model/meetups/insertMeetup.js');

const createMeetup = async (req, res, next) => {
  try {
    const { title, description, category, city, date, user_id } = req.body;
    const meetup_id = await insertMeetup({
      title,
      description,
      category,
      city,
      date,
      user_id
    });
    res.status(200).send({
      status: 'ok',
      data: {
        id: meetup_id,
        title,
        description,
        category,
        city,
        date,
        user_id
      }
    });
  } catch (error) {
    next(error);
  }
};
module.exports = createMeetup;
