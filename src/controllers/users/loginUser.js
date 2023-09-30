const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const selectUserByEmail = require('../../model/users/selectUserByEmail.js');
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await selectUserByEmail(email);
    if (!user) {
      throw new Error('Invalid email or password');
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid email or password');
    }
    const tokenPayload = { id: user.id };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: '40d'
    });
    res.status(200).send({ status: 'ok', data: { token }, id: user.id });
  } catch (error) {
    next(error);
  }
};
module.exports = loginUser;
