const Sequelize = require("sequelize");
const db = require("../config/postgres-db");

const DeliveryRoute = db.define("delivery_routes", {
  route_name: {
    type: Sequelize.STRING
  },
  other_route_notes: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = DeliveryRoute;
