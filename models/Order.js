const Sequelize = require("sequelize");
const db = require("../config/postgres-db");
const Customer = require("./Customer");

const Order = db.define(
  "orders",
  {
    customer_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Customer,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    order_status: {
      type: Sequelize.ENUM,
      values: ["created", "picked", "on truck", "delivered"]
    },
    order_total: {
      type: Sequelize.DECIMAL
    },
    is_grouped: {
      type: Sequelize.BOOLEAN
    },
    previous_order_num: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: Sequelize.DATE
    },
    updated_at: {
      type: Sequelize.DATE
    }
  },
  { underscored: true }
);
Customer.hasMany(Order);
Order.belongsTo(Customer);

module.exports = Order;
