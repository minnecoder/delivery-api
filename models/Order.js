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
  order_status: {
    type: Sequelize.ENUM,
    values: ["created", "picked", "on_truck", "delivered"]
  },
  order_total: {
    type: Sequelize.DECIMAL
  },
  is_grouped: {
    type: Sequelize.BOOLEAN
  },
  prev_order_num: {
    type: Sequelize.INTEGER
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
