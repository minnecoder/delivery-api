const Joi = require('@hapi/joi');

const noteValidation = data => {
  const noteSchema = {
    custName: Joi.string()
      .required()
      .messages({
        'string.base': 'Customer Name must be a string',
        'string.empty': 'Customer Name is required',
      }),
    address: Joi.string()
      .required()
      .messages({
        'string.base': 'Address must be a string',
        'string.empty': 'Address is required',
      }),
    suite: Joi.string()
      .required()
      .messages({
        'string.base': 'Suite must be a string',
        'string.empty': 'Suite is required',
      }),
    city: Joi.string()
      .required()
      .messages({
        'string.base': 'City must be a string',
        'string.empty': 'City is required',
      }),
    deliveryLocation: Joi.string()
      .required()
      .messages({
        'string.base': 'Delivery Location must be a string',
        'string.empty': 'Delivery Location is required',
      }),
    notes: Joi.string()
      .required()
      .messages({
        'string.base': 'Notes must be a string',
        'string.empty': 'Notes is required',
      }),
  };
  return noteSchema.validate(data);
};
module.exports.noteValidation = noteValidation;

const userValidation = data => {
  const userSchema = Joi.object({
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
    role: Joi.string().required(),
  });
  return userSchema.validate(data);
};

module.exports.userValidation = userValidation;

const loginValidation = data => {
  const loginSchema = Joi.object({
    userName: Joi.string()
      .min(6)
      .max(50)
      .required(),
    password: Joi.string()
      .min(8)
      .required(),
  });
  return loginSchema.validate(data);
};

module.exports.loginValidation = loginValidation;

const customerValidation = data => {
  const customerSchema = Joi.object({
    firstName: Joi.string()
      .min(4)
      .max(50)
      .required(),
    lastName: Joi.string()
      .min(4)
      .max(50)
      .required(),
    address: Joi.string()
      .max(500)
      .required(),
    city: Joi.string()
      .min(4)
      .max(50)
      .required(),
    state: Joi.string()
      .min(2)
      .max(50)
      .required(),
    zipCode: Joi.string()
      .min(4)
      .max(20)
      .required(),
    phone: Joi.string()
      .min(4)
      .max(20)
      .required(),
    email: Joi.string()
      .min(8)
      .max(50)
      .required(),
    password: Joi.string()
      .min(8)
      .required(),
  });
  return customerSchema.validate(data);
};

module.exports.customerValidation = customerValidation;

const productValidation = data => {
  const productSchema = Joi.object({
    productID: Joi.number().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    cost: Joi.number().required(),
    price: Joi.number().required(),
    onHand: Joi.number().required(),
    picture: Joi.string().required(),
  });
  return productSchema.validate(data);
};

module.exports.productValidation = productValidation;

const orderValidation = data => {
  const orderSchema = Joi.object({
    products: Joi.array().required(),
    customer: Joi.object().required(),
    status: Joi.string(),
    total: Joi.number().required(),
  });
  return orderSchema.validate(data);
};

module.exports.orderValidation = orderValidation;
