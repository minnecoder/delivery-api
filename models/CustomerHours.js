const Sequelize = require("sequelize");
const db = require("../config/postgres-db");
const Customer = require("./Customer");

const CustomerHours = db.define("customer_hours", {
  customer_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Customer,
      key: "id",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  monday_open: {
    type: Sequelize.TIME
  },
  monday_close: {
    type: Sequelize.TIME
  },
  tuesday_open: {
    type: Sequelize.TIME
  },
  tuesday_close: {
    type: Sequelize.TIME
  },
  wednesday_open: {
    type: Sequelize.TIME
  },
  wednesday_close: {
    type: Sequelize.TIME
  },
  thursday_open: {
    type: Sequelize.TIME
  },
  thursday_close: {
    type: Sequelize.TIME
  },
  friday_open: {
    type: Sequelize.TIME
  },
  friday_close: {
    type: Sequelize.TIME
  },
  saturday_open: {
    type: Sequelize.TIME
  },
  saturday_close: {
    type: Sequelize.TIME
  },
  sunday_open: {
    type: Sequelize.TIME
  },
  sunday_close: {
    type: Sequelize.TIME
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

Customer.hasMany(CustomerHours);
CustomerHours.belongsTo(Customer);

module.exports = CustomerHours;
