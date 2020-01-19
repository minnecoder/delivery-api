const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User name is required"],
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minlength: 8
  },
  roles: [
    {
      role: {
        type: String,
        required: true
      }
    }
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);
