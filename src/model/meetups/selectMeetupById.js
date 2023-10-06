const getPool = require('../../database/getPool');

const selectMeetupById = async (id) => {
  const pool = getPool();
  const [[meetup]] = await pool.query(
    'SELECT m.*, COUNT(i.id_user) AS total_inscriptions FROM meetups AS m LEFT JOIN inscriptions AS i ON m.id = i.id_meetup WHERE m.id = ? GROUP BY m.id; ',
    [id]
  );
  const [inscriptions] = await pool.query(
    'SELECT * from inscriptions AS i INNER JOIN users AS u ON i.id_user = u.id WHERE id_meetup = ?;',
    [id]
  );
  meetup.inscriptions = inscriptions;
  return meetup;
};
module.exports = selectMeetupById;
