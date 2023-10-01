const meetupSchema = require('../../schemas/meetupsSchema.js');
const insertMeetup = require('../../model/meetups/insertMeetup.js');

const createMeetup = async (req, res, next) => {
  try {
    const result = await meetupSchema.safeParseAsync(req.body);
    if (!result.success) {
      const [error] = JSON.parse(result.error);

      throw new Error(`field:${error.path[0]}, ${error.message}`);
    }
    const { title, description, photo, category, city, date, user_id } =
      req.body;

    const meetup_id = await insertMeetup({
      title,
      description,
      photo,
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
        photo,
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
