const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  custName: {
    type: String,
    required: [true, "Customer name is required"]
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  },
  suite: String,
  city: {
    type: String,
    required: [true, "City is required"]
  },
  deliveryLocation: {
    type: String,
    required: [true, "Delivery Location is required"]
  },
  notes: String,
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Note", NoteSchema);
