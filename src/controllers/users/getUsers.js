const selectUserById = require('../../model/users/selectUserById.js');

const getUsers = async (req, res) => {
  const { id } = req.auth;

  try {
    const user = await selectUserById(id);
    res.status(200).send({ status: 'ok', user });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getUsers;
