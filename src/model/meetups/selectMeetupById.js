const getPool = require('../../database/getPool');

const selectMeetupById = async (id) => {
  const pool = getPool();
  const [[meetup]] = await pool.query('SELECT * FROM meetups WHERE id = ?', [
    id
  ]);
  return meetup;
};
module.exports = selectMeetupById;
