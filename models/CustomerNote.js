const Sequelize = require("sequelize");
const db = require("../config/postgres-db");

const CustomerNote = db.define("customer_notes", {
  customer_id: {
    type: Sequelize.INTEGER
  },
  note: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = CustomerNote;
