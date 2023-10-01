const getPool = require('../../database/getPool.js');

const insertMeetup = async (meetup) => {
  const { title, description, photo, category, city, date, user_id } = meetup;

  const pool = getPool();

  const [{ insertId }] = await pool.query(
    'INSERT INTO meetups (title, description, photo, category, city, date, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [title, description, photo, category, city, new Date(date), user_id]
  );
  return insertId;
};
module.exports = insertMeetup;
