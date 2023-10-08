const insertInscription = require('../../model/inscriptions/insertInscription');

const createInscription = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    const { id } = req.params;

    try {
      await insertInscription({
        id_user: userId,
        id_meetup: id
      });
    } catch (error) {
      throw new Error('User already inscribed');
    }

    res.status(201).send({ status: 'ok', message: 'user inscribed' });
  } catch (error) {
    next(error);
  }
};
module.exports = createInscription;
