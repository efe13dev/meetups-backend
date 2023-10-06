const getPool = require('../../database/getPool');

const selectMeetups = async () => {
  const pool = getPool();
  const [meetups] = await pool.query(
    'SELECT m.*, COUNT(i.id_user) AS inscriptions FROM meetups AS m LEFT JOIN inscriptions AS i ON m.id = i.id_meetup GROUP BY m.id; '
  );
  return meetups;
};

module.exports = selectMeetups;
