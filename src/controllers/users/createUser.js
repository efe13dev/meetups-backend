const bcrypt = require('bcrypt');
const userSchema = require('../../schemas/userSchema.js');
const selectUserByEmail = require('../../model/users/selectUserByEmail.js');
const insertUser = require('../../model/users/insertUser.js');
const processAndSaveImage = require('../../utils/processAndSaveImage.js');
const createUser = async (req, res, next) => {
  try {
    const result = await userSchema.safeParseAsync(req.body);
    if (!result.success) {
      const [error] = JSON.parse(result.error);

      throw new Error(`field:${error.path[0]}, ${error.message}`);
    }

    const { email, password, name, biography } = req.body;
    const user = await selectUserByEmail(email);
    if (user) {
      throw new Error('User already exists');
    }
    let processAvatar;
    if (req.files) {
      const avatar = req.files.avatar;
      processAvatar = await processAndSaveImage(avatar.data);
    } else {
      processAvatar = 'No image';
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const insertId = await insertUser({
      email,
      password: encryptedPassword,
      name,
      biography,
      avatar: processAvatar
    });
    res
      .status(201)
      .send({ status: 'ok', id: insertId, email, message: 'user created' });
  } catch (error) {
    next(error);
  }
};
module.exports = createUser;
