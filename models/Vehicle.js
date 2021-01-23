const Sequelize = require("sequelize");
const db = require("../config/postgres-db");

const Vehicles = db.define("vehicles", {
  vehicle_year: {
    type: Sequelize.INTEGER
  },
  vehicle_make: {
    type: Sequelize.STRING
  },
  vehicle_model: {
    type: Sequelize.STRING
  },
  vehicle_license_plate: {
    type: Sequelize.STRING
  },
  vehicle_tab_date: {
    type: Sequelize.DATE
  },
  vehicle_status: {
    type: Sequelize.ENUM,
    values: ["running", "being repaired"]
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = Vehicles;
