const insertMeetup = require('../../model/mettups/insertMeetup.js');

const createMeetup = async (req, res) => {
  const { title, description, category_id, city_id, date, user_id } = req.body;
  const meetup = await insertMeetup({
    title,
    description,
    category_id,
    city_id,
    date,
    user_id
  });
  res.status(200).json({ status: 'ok', meetup });
};
module.exports = createMeetup;
