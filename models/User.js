const Sequelize = require('sequelize');
const db = require('../config/postgres-db');

const User = db.define('users', {
  user__name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    unique: 'compositeIndex',
  },
  password: {
    type: Sequelize.STRING,
    min: 8,
  },
  role: {
    type: Sequelize.STRING,
    isIn: [['driver', 'manager', 'admin', 'user', 'customer']],
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = User;
