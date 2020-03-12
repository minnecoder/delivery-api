const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Customer = require('./Customer');
const Order = require('./Order');
const DeliveryRoute = require('./DeliveryRoute');
const Truck = require('./Truck');

const Stop = db.define('stops', {
  customerID: {
    type: Sequelize.INTEGER,
    references: {
      model: Customer,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  orderID: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  deliveryRouteID: {
    type: Sequelize.INTEGER,
    references: {
      model: DeliveryRoute,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  TruckID: {
    type: Sequelize.INTEGER,
    references: {
      model: Truck,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  is_delivered: {
    type: Sequelize.BOOLEAN,
  },
  is_signed: {
    type: Sequelize.BOOLEAN,
  },
  reason_code: {
    type: Sequelize.STRING,
  },
  signer_name: {
    type: Sequelize.STRING,
  },
});

module.exports = Stop;
