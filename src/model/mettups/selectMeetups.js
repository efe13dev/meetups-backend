const getPool = require('../../database/getPool');

const selectMeetups = async () => {
  const pool = getPool();
  const [meetups] = await pool.query('SELECT * FROM meetups');
  return meetups;
};

module.exports = selectMeetups;
