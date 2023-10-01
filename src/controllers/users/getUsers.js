const selectUsers = require('../../model/users/selectUsers.js');

const getMeetups = async (req, res) => {
  try {
    const users = await selectUsers();
    res.status(200).send({ status: 'ok', users });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getMeetups;
