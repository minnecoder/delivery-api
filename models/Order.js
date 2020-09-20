const Sequelize = require("sequelize");
const db = require("../config/postgres-db");
const Customer = require("./Customer");

const Order = db.define("orders", {
  customerId: {
    type: Sequelize.INTEGER,
    references: {
      model: Customer,
      key: "id",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  order_number: {
    type: Sequelize.INTEGER
  },
  order_date: {
    type: Sequelize.DATE
  },
  order_status: {
    type: Sequelize.STRING
  },
  order_total: {
    type: Sequelize.DECIMAL
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});
Customer.hasMany(Order);
Order.belongsTo(Customer);

module.exports = Order;
