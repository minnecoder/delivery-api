const Order = require("../models/Product");
const verify = require("../routes/verifyToken");
const { orderValidation } = require("../validation");

// @desc Get all orders
// @route GET /orders
// @access User
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    return res.status(200).json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single order
// @route GET /orders/:id
// @access User
exports.getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    return res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add order
// @route POST /orders
// @access User
exports.addOrder = async (req, res) => {
  // Validate data before adding
  const { error } = orderValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const order = await Order.create(req.body);

    return res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update order
// @route UPDATE /orders/:id
// @access User
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).exec();
    order.set(req.body);
    const result = await Order.save();
    return res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete order
// @route DELETE /orders/:id
// @access User
exports.deleteOrder = async (req, res) => {
  try {
    const result = await Order.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      success: true
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
