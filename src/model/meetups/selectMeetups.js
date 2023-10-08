const getPool = require('../../database/getPool');

const selectMeetups = async () => {
  const pool = getPool();
  const [meetups] = await pool.query(
    'SELECT m.*, COUNT(i.id_user) AS total_inscriptions FROM meetups AS m LEFT JOIN inscriptions AS i ON m.id = i.id_meetup WHERE m.date >= CURDATE() GROUP BY m.id ORDER BY m.date ASC; '
  );
  return meetups;
};

module.exports = selectMeetups;
