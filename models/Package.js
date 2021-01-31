const Sequelize = require("sequelize");
const db = require("../config/postgres-db");
const Order = require("./Order");
const OrderItems = require("./OrderItem");
const Product = require("./Product");

const Package = db.define(
  "packages",
  {
    order_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Order,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    order_item_id: {
      type: Sequelize.INTEGER,
      references: {
        model: OrderItems,
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
    package_status: {
      type: Sequelize.ENUM,
      values: ["not started", "picked", "scanned", "on truck", "delivered", "damaged", "returned"]
    },
    package_barcode: {
      type: Sequelize.INTEGER,
      isNumeric: true
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

Order.hasMany(Package);
Package.belongsTo(Order);
OrderItems.hasMany(Package);
Package.belongsTo(OrderItems);
Product.hasMany(Package);
Package.belongsTo(Product);

module.exports = Package;
