const meetupSchema = require('../../schemas/meetupsSchema.js');
const insertMeetup = require('../../model/meetups/insertMeetup.js');
const processAndSaveImage = require('../../utils/processAndSaveImage.js');

const createMeetup = async (req, res, next) => {
  try {
    const result = await meetupSchema.safeParseAsync(req.body);

    if (!result.success) {
      const [error] = JSON.parse(result.error);

      throw new Error(`field:${error.path[0]}, ${error.message}`);
    }
    const userId = req.auth.id;

    const { title, description, category, city, date } = req.body;

    let processPhoto;

    if (req.files) {
      const photo = req.files.photo;
      processPhoto = await processAndSaveImage(photo.data);
    } else {
      processPhoto = 'default-meetup-image.png';
    }

    const meetup_id = await insertMeetup({
      title,
      description,
      photo: processPhoto,
      category,
      city,
      date,
      user_id: userId
    });
    res.status(200).send({
      status: 'ok',
      data: {
        id: meetup_id,
        title,
        description,
        photo: processPhoto,
        category,
        city,
        date,
        userId
      }
    });
  } catch (error) {
    next(error);
  }
};
module.exports = createMeetup;
