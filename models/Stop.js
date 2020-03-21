const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Customer = require('./Customer');
const Order = require('./Order');
const DeliveryRoute = require('./DeliveryRoute');
const Truck = require('./Truck');
const Driver = require('./Driver');

const Stop = db.define('stops', {
  customerId: {
    type: Sequelize.INTEGER,
    references: {
      model: Customer,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  orderId: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  deliveryRouteId: {
    type: Sequelize.INTEGER,
    references: {
      model: DeliveryRoute,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  truckId: {
    type: Sequelize.INTEGER,
    references: {
      model: Truck,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  driverId: {
    type: Sequelize.INTEGER,
    references: {
      model: Driver,
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
  start_time: {
    type: Sequelize.TIME,
  },
  stop_time: {
    type: Sequelize.TIME,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = Stop;
