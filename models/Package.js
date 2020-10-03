const Sequelize = require("sequelize");
const db = require("../config/postgres-db");
const Order = require("./Order");
const OrderItems = require("./OrderItems");

const Package = db.define("packages", {
  order_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: "id",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  items_id: {
    type: Sequelize.INTEGER,
    references: {
      model: OrderItems,
      key: "id",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  package_status: {
    type: Sequelize.ENUM,
    values: ["not started", "picked", "scanned", "on_truck", "delivered", "damaged", "returned"]
  },
  package_barcode: {
    type: Sequelize.INTEGER,
    isNumeric: true
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});
Package.associate = models => {
  Package.belongsTo(models.Order, {
    foreignKey: "orderID",
    as: "order"
  });
};
Package.associate = models => {
  Package.belongsTo(models.Product, {
    foreignKey: "productID",
    as: "product"
  });
};
Order.hasMany(Package);
Package.belongsTo(Order);
OrderItems.hasMany(Package);
Package.belongsTo(OrderItems);

module.exports = Package;
