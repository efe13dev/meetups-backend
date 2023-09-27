const insertMeetup = require('../../model/meetups/insertMeetup.js');

const createMeetup = async (req, res) => {
  const { title, description, category_id, city_id, date, user_id } = req.body;
  const meetup_id = await insertMeetup({
    title,
    description,
    category_id,
    city_id,
    date,
    user_id
  });
  res.status(200).send({
    status: 'ok',
    data: {
      id: meetup_id,
      title,
      description,
      category_id,
      city_id,
      date,
      user_id
    }
  });
};
module.exports = createMeetup;
