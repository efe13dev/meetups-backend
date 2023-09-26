const getPool = require('../../database/getPool.js');

const insertMeetup = async (meetup) => {
  const { title, description, category_id, city_id, date, user_id } = meetup;
  const pool = getPool();
  const [{ insertedMeetup }] = await pool.query(
    'INSERT INTO meetups (title, description, category_id, city_id, date, user_id) VALUES (?, ?, ?, ?, ?, ?)',
    [title, description, category_id, city_id, date, user_id]
  );
  return insertedMeetup;
};
module.exports = insertMeetup;
