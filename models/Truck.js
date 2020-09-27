const Sequelize = require("sequelize");
const db = require("../config/postgres-db");

const Truck = db.define("trucks", {
  truck_year: {
    type: Sequelize.INTEGER
  },
  truck_make: {
    type: Sequelize.STRING
  },
  truck_model: {
    type: Sequelize.STRING
  },
  truck_license_number: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = Truck;
