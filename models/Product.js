const Sequelize = require("sequelize");
const db = require("../config/postgres-db");

const Product = db.define("products", {
  item: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  cost: {
    type: Sequelize.DECIMAL
  },
  price: {
    type: Sequelize.DECIMAL
  },
  on_hand: {
    type: Sequelize.INTEGER,
    isNumeric: true
  },
  product_status: {
    type: Sequelize.ENUM,
    values: ["out of stock", "in stock", "running low"]
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = Product;
