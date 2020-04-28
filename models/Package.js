const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Order = require('./Order');
const Product = require('./Product');

const Package = db.define('packages', {
  orderId: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  productId: {
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
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});
Package.associate = (models) => {
  Package.belongsTo(models.Order, {
    foreignKey: 'orderID',
    as: 'order',
  });
};
Package.associate = (models) => {
  Package.belongsTo(models.Product, {
    foreignKey: 'productID',
    as: 'product',
  });
};
Order.hasMany(Package);
Package.belongsTo(Order);


module.exports = Package;
