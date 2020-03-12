const Sequelize = require('sequelize');
const db = require('../config/postgres-db');

const Customer = db.define('customers', {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  zipCode: {
    type: Sequelize.STRING,
    isNumeric: true,
  },
  phone: {
    type: Sequelize.STRING,
    isNumeric: true,
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
  },
});

module.exports = Customer;
