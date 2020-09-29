const Sequelize = require("sequelize");
const db = require("../config/postgres-db");

const Driver = db.define("drivers", {
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  phone_number: {
    type: Sequelize.INTEGER
  },
  birthday: {
    type: Sequelize.DATE
  },
  hire_date: {
    type: Sequelize.DATE
  },
  vehicle_type: {
    type: Sequelize.ENUM,
    values: [
      "car",
      "pickup",
      "suv",
      "van",
      "cargo_van",
      "sprinter_van",
      "box_truck",
      "dock_truck",
      "semi"
    ]
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = Driver;
