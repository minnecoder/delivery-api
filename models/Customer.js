const Sequelize = require("sequelize");
const db = require("../config/postgres-db");

const Customer = db.define("customers", {
  customer_name: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.INTEGER,
    isNumeric: true
  },
  phone: {
    type: Sequelize.STRING,
    isNumeric: true
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = Customer;
