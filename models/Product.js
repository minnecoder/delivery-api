const Sequelize = require('sequelize');
const db = require('../config/postgres-db');

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  cost: {
    type: Sequelize.DECIMAL,
  },
  price: {
    type: Sequelize.DECIMAL,
  },
  onHand: {
    type: Sequelize.INTEGER,
    isNumeric: true,
  },
});

module.exports = Product;
