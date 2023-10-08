const getPool = require('../../database/getPool.js');

const deleteInscription = async (inscription) => {
  const { id_user, id_meetup } = inscription;

  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    'DELETE FROM inscriptions WHERE id_user = ? and id_meetup = ?',
    [id_user, id_meetup]
  );
  return affectedRows;
};
module.exports = deleteInscription;
