const deleteInscription = require('../../model/inscriptions/deleteInscription');

const dropInscription = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    const { id } = req.params;
    const data = await deleteInscription({
      id_user: userId,
      id_meetup: id
    });

    if (data === 0) {
      throw new Error('User is not inscribed in this meetup');
    }

    res.status(201).send({ status: 'ok', message: 'user unsuscribed' });
  } catch (error) {
    next(error);
  }
};
module.exports = dropInscription;
