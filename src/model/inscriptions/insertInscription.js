const getPool = require('../../database/getPool.js');

const insertInscription = async (inscription) => {
  const { id_user, id_meetup } = inscription;

  const pool = getPool();

  const [{ insertId }] = await pool.query(
    'INSERT INTO inscriptions (id_user, id_meetup ) VALUES (?, ?)',
    [id_user, id_meetup]
  );
  return insertId;
};
module.exports = insertInscription;
