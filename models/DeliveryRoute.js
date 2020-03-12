const Sequelize = require('sequelize');
const db = require('../config/postgres-db');

const DeliveryRoute = db.define('delivery_routes', {
  route_name: {
    type: Sequelize.STRING,
  },
  other_route_notes: {
    type: Sequelize.STRING,
  },
});

module.exports = DeliveryRoute;
