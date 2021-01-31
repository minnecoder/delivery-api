const Sequelize = require("sequelize");
const db = require("../config/postgres-db");
const Customer = require("./Customer");

const PreviousSigners = db.define(
  "previous_signers",
  {
    customer_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Customer,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
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
  },
  {
    underscored: true
  }
);

Customer.hasMany(PreviousSigners);
PreviousSigners.belongsTo(Customer);

module.exports = PreviousSigners;
