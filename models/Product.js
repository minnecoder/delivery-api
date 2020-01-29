const mongoose = require("mongoose");
const Customer = require("./Customer");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"]
  },
  description: {
    type: String,
    required: [true, "Product description is required"]
  },
  cost: {
    type: Number,
    required: [true, "Product cost is required"]
  },
  price: {
    type: Number,
    required: [true, "Product price is required"]
  },
  onHand: {
    type: Number,
    required: [true, "Number of items in stock is required"]
  },
  picture: {
    type: String,
    required: [true, "Picture link is required"]
  }
});

module.exports = mongoose.model("Product", ProductSchema);
