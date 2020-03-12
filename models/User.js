const Sequelize = require('sequelize');
const db = require('../config/postgres-db');

const User = db.define({
  userName: {
    type: String,
    required: [true, 'User name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minlength: 8,
  },
  role: {
    type: String,
    required: true,
    enum: ['driver', 'manager', 'admin', 'user', 'customer'],
  },
});

module.exports = User;
