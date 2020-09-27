const Sequelize = require("sequelize");
const db = require("../config/postgres-db");

const Driver = db.define("drivers", {
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = Driver;
