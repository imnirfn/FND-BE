const joi = require('@hapi/joi');

const registerValidator = (data) => {
  const schema = joi.object({
    name: joi.string()
      .min(6)
      .max(255)
      .required(),
    email: joi.string()
      .min(6)
      .max(255)
      .required()
      .email(),
    password: joi.string()
      .min(6)
      .max(255)
      .required(),
    roles: joi.string()
      .valid('user', 'journalist', 'admin', 'enterprise')
      .required()
  });

  return schema.validate(data);
};

const loginValidator = (data) => {
  const schema = joi.object({
    email: joi.string()
      .min(6)
      .max(255)
      .required()
      .email(),
    password: joi.string()
      .min(6)
      .max(255)
      .required()
  });

  return schema.validate(data);
};

module.exports = {
  loginValidator,
  registerValidator
};
