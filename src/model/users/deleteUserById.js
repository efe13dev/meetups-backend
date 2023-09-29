const getPool = require('../../database/getPool.js');

const deleteUserById = async (id) => {
  const pool = getPool();
  await pool.query('DELETE FROM users WHERE id = ?', [id]);
};
module.exports = deleteUserById;
