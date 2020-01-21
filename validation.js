const Joi = require("@hapi/joi");

const noteValidation = data => {
  const noteSchema = {
    custName: Joi.string()
      .required()
      .messages({
        "string.base": "Customer Name must be a string",
        "string.empty": "Customer Name is required"
      }),
    address: Joi.string()
      .required()
      .messages({
        "string.base": "Address must be a string",
        "string.empty": "Address is required"
      }),
    suite: Joi.string()
      .required()
      .messages({
        "string.base": "Suite must be a string",
        "string.empty": "Suite is required"
      }),
    city: Joi.string()
      .required()
      .messages({
        "string.base": "City must be a string",
        "string.empty": "City is required"
      }),
    deliveryLocation: Joi.string()
      .required()
      .messages({
        "string.base": "Delivery Location must be a string",
        "string.empty": "Delivery Location is required"
      }),
    notes: Joi.string()
      .required()
      .messages({
        "string.base": "Notes must be a string",
        "string.empty": "Notes is required"
      })
  };
  return Joi.assert(data, noteSchema);
};
module.exports.noteValidation = noteValidation;

const userValidation = data => {
  const schema = Joi.object({
    userName: Joi.string()
      .min(6)
      .max(50)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string()
      .min(8)
      .required(),
    role: Joi.string().required()
  });
  return schema.validate(data);
};

module.exports.userValidation = userValidation;

const loginValidation = data => {
  const schema = Joi.object({
    userName: Joi.string()
      .min(6)
      .max(50)
      .required(),
    password: Joi.string()
      .min(8)
      .required()
  });
  return schema.validate(data);
};

module.exports.loginValidation = loginValidation;
