const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Driver = require('./Driver');
const DeliveryRoute = require('./DeliveryRoute');
const Truck = require('./Truck');

const DriverReport = db.define('driver_report', {
  driverId: {
    type: Sequelize.INTEGER,
    references: {
      model: Driver,
      key: 'id',
      defferable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  routeId: {
    type: Sequelize.INTEGER,
    references: {
      model: DeliveryRoute,
      key: 'id',
      defferable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  truckId: {
    type: Sequelize.INTEGER,
    references: {
      model: Truck,
      key: 'id',
      defferable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  start_mileage: {
    type: Sequelize.INTEGER,
  },
  first_stop_mileage: {
    type: Sequelize.INTEGER,
  },
  last_stop_mileage: {
    type: Sequelize.INTEGER,
  },
  final_mileage: {
    type: Sequelize.INTEGER,
  },
  break1_start: {
    type: Sequelize.TIME,
  },
  break1_end: {
    type: Sequelize.TIME,
  },
  break2_start: {
    type: Sequelize.TIME,
  },
  break2_end: {
    type: Sequelize.TIME,
  },
  lunch_start: {
    type: Sequelize.TIME,
  },
  lunch_end: {
    type: Sequelize.TIME,
  },
  stops_completed: {
    type: Sequelize.INTEGER,
  },
  stops_remaining: {
    type: Sequelize.INTEGER,
  },
  num_signature_stops: {
    type: Sequelize.INTEGER,
  },
  date: {
    type: Sequelize.DATE,
  },
}, {
  freezeTableName: true,
});
Driver.hasMany(DriverReport);
DriverReport.belongsTo(Driver);
Truck.hasMany(DriverReport);
DriverReport.belongsTo(Truck);
DeliveryRoute.hasMany(DriverReport);
DriverReport.belongsTo(DeliveryRoute);

module.exports = DriverReport;
