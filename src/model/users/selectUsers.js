const getPool = require('../../database/getPool.js');

const selectUsers = async () => {
  const pool = getPool();
  const [user] = await pool.query('SELECT * FROM users ');
  return user;
};
module.exports = selectUsers;
