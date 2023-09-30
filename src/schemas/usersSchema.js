const { z } = require('zod');

const userSchema = z.object({
  email: z.string().email().min(5).max(50),
  password: z.string(),
  name: z.string().min(3).max(50),
  biography: z.string().max(2000).optional()
});

module.exports = userSchema;
