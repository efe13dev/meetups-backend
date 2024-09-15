const getPool = require('../../database/getPool.js');

const selectUserByEmail = async (email) => {
  const pool = getPool();

  const [[user]] = await pool.query('SELECT * FROM users WHERE email = ?', [
    email
  ]);
  return user;
};
module.exports = selectUserByEmail;
