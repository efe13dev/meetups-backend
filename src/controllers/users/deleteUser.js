const deleteUserById = require('../../model/users/deleteUserById.js');
const selectUserById = require('../../model/users/selectUserById.js');

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await selectUserById(id);
    if (!user)
      return res
        .status(404)
        .send({ status: 'error', message: `User id:${id} not found` });
    await deleteUserById(id);
    res.status(200).send({ status: 'ok', message: `User id:${id} deleted` });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteUser;
