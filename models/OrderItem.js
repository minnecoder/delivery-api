const Sequelize = require("sequelize");
const db = require("../config/postgres-db");
const Order = require("./Order");
const Product = require("./Product");

const OrderItems = db.define(
  "order_items",
  {
    order_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Order,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    product_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Product,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    quantity: {
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
    underscored: true
  }
);

Order.hasMany(OrderItems);
OrderItems.belongsTo(Order);
Product.hasMany(OrderItems);
OrderItems.belongsTo(Product);

module.exports = OrderItems;
