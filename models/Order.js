const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
  products: [{ type: ObjectId, ref: "Product" }],
  customer: { type: ObjectId, ref: "Customer" },
  status: {
    type: String,
    default: "Not processed",
    enum: [
      "Not processed",
      "Processing",
      "Out for delivery",
      "Delivered",
      "Returned",
      "Cancelled"
    ]
  },
  total: {
    type: Number,
    required: [true, "Total is required"]
  }
});

module.exports = mongoose.model("Order", OrderSchema);
