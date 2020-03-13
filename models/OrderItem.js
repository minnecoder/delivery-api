const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Order = require('./Order');
const Product = require('./Product');

const OrderItem = db.define('order_items', {
  orderID: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  productID: {
    type: Sequelize.INTEGER,
    references: {
      model: Product,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  unit_price: {
    type: Sequelize.DECIMAL,
  },
  quantity: {
    type: Sequelize.INTEGER,
    isNumeric: true,
  },
});
OrderItem.associate = function(models) {
  OrderItem.belongsTo(models.Order, {
    foreignKey: 'orderID',
    as: 'order',
  });
};
OrderItem.associate = function(models) {
  OrderItem.belongsTo(models.Product, {
    foreignKey: 'productID',
    as: 'product',
  });
};

module.exports = OrderItem;
