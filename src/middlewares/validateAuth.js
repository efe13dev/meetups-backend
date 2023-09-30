const jwt = require('jsonwebtoken');

const validateAuth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error('Token not found');
    }
    console.log(process.env.JWT_SECRET);
    const tokenPayload = jwt.verify(authorization, process.env.JWT_SECRET);

    req.auth = tokenPayload;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = validateAuth;
