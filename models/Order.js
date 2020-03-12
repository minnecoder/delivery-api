const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Customer = require('./Customer');

const Order = db.define('orders', {
  customerID: {
    type: Sequelize.INTEGER,
    references: {
      model: Customer,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  order_date: {
    type: Sequelize.DATE,
  },
  order_status: {
    type: Sequelize.STRING,
  },
  order_total: {
    type: Sequelize.DECIMAL,
  },
});

module.exports = Order;
