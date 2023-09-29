const getPool = require('../../database/getPool.js');
const insertUser = async (user) => {
  const pool = getPool();
  const [{ insertId }] = await pool.query(
    'INSERT INTO users (email, password, name, biography) VALUES (?, ?, ?, ?)',
    [user.email, user.password, user.name, user.biography]
  );
  return insertId;
};
module.exports = insertUser;
