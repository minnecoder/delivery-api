const Sequelize = require("sequelize");
const db = require("../config/postgres-db");
const Driver = require("./Driver");
const Vehicles = require("./Vehicle");

const DriverReport = db.define(
  "driver_report",
  {
    driver_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Driver,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    vehicle_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Vehicles,
        key: "id",
        defferable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    start_mileage: {
      type: Sequelize.INTEGER
    },
    first_stop_mileage: {
      type: Sequelize.INTEGER
    },
    last_stop_mileage: {
      type: Sequelize.INTEGER
    },
    final_mileage: {
      type: Sequelize.INTEGER
    },
    break1_start: {
      type: Sequelize.TIME
    },
    break1_end: {
      type: Sequelize.TIME
    },
    break2_start: {
      type: Sequelize.TIME
    },
    break2_end: {
      type: Sequelize.TIME
    },
    lunch_start: {
      type: Sequelize.TIME
    },
    lunch_end: {
      type: Sequelize.TIME
    },
    stops_completed: {
      type: Sequelize.INTEGER
    },
    stops_remaining: {
      type: Sequelize.INTEGER
    },
    num_signature_stops: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: Sequelize.DATE
    },
    updated_at: {
      type: Sequelize.DATE
    }
  },
  {
    underscored: true,
    freezeTableName: true
  }
);
Driver.hasMany(DriverReport);
DriverReport.belongsTo(Driver);
Vehicles.hasMany(DriverReport);
DriverReport.belongsTo(Vehicles);

module.exports = DriverReport;
