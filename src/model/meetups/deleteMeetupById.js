const getPool = require('../../database/getPool.js');

const deleteMeetupById = async (id) => {
  const pool = getPool();
  await pool.query('DELETE FROM meetups WHERE id = ?', [id]);
};
module.exports = deleteMeetupById;
