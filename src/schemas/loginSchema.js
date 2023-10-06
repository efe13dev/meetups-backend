const { z } = require('zod');

const loginSchema = z.object({
  email: z.string().email().min(5).max(50),
  password: z.string()
});

module.exports = loginSchema;
