const Sequelize = require("sequelize");
const db = require("../config/postgres-db");
const Customer = require("./Customer");
const Order = require("./Order");
const Vehicles = require("./Vehicle");
const Driver = require("./Driver");

const Stop = db.define(
  "stops",
  {
    customer_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Customer,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    order_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Order,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    vehicles_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Vehicles,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    driver_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Driver,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    is_delivered: {
      type: Sequelize.BOOLEAN
    },
    is_signed: {
      type: Sequelize.BOOLEAN
    },
    reason_code: {
      type: Sequelize.ENUM,
      values: ["business_closed"]
    },
    signer_name: {
      type: Sequelize.STRING
    },
    start_time: {
      type: Sequelize.TIME
    },
    stop_time: {
      type: Sequelize.TIME
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  },
  {
    freezeTableName: true
  }
);
Customer.hasMany(Stop);
Stop.belongsTo(Customer);
Order.hasMany(Stop);
Stop.belongsTo(Order);
Vehicles.hasMany(Stop);
Stop.belongsTo(Vehicles);
Driver.hasMany(Stop);
Stop.belongsTo(Driver);

module.exports = Stop;
