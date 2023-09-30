const bcrypt = require('bcrypt');
const userSchema = require('../../schemas/usersSchema.js');
const selectUserByEmail = require('../../model/users/selectUserByEmail.js');
const insertUser = require('../../model/users/insertUser.js');
const createUser = async (req, res, next) => {
  try {
    const [errorz] = await userSchema.parseAsync(req.body);
    console.log(errorz);
    const { email, password, name, biography } = req.body;
    const user = await selectUserByEmail(email);
    if (user) {
      throw new Error('User already exists');
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const insertId = await insertUser({
      email,
      password: encryptedPassword,
      name,
      biography
    });
    res
      .status(201)
      .send({ status: 'ok', id: insertId, email, message: 'user created' });
  } catch (error) {
    next(error);
  }
};
module.exports = createUser;
