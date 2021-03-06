const OrderItem = require("../models/OrderItem");

// @desc Get all order items
// @route GET /orderitems
// @access User
exports.getOrderItems = async (req, res) => {
  try {
    const orderitems = await OrderItem.findAll();

    return res.status(200).json({
      success: true,
      count: orderitems.length,
      data: orderitems
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single order item
// @route GET /orderitems/:id
// @access User
exports.getSingleOrderItem = async (req, res) => {
  try {
    const previoussigner = await OrderItem.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!previoussigner) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: previoussigner
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add order item
// @route POST /orderitems
// @access User
exports.addOrderItem = async (req, res) => {
  try {
    const previoussigner = await OrderItem.create(req.body);

    return res.status(200).json({
      success: true,
      data: previoussigner
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.addBulkorderitems = async (req, res) => {
  try {
    const orderitems = await OrderItem.bulkCreate(req.body);

    return res.status(200).json({
      success: true,
      count: orderitems.length,
      data: orderitems
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update order item
// @route UPDATE /orderitems/:id
// @access User
exports.updateOrderItem = async (req, res) => {
  try {
    const previoussigner = await OrderItem.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!previoussigner) {
      return res.status(404).json({
        success: false,
        error: "previoussigner not found"
      });
    }

    await OrderItem.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: previoussigner
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete order item
// @route DELETE /orderitems/:id
// @access User
exports.deleteOrderItem = async (req, res) => {
  try {
    const previoussigner = await OrderItem.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!previoussigner) {
      return res.status(404).json({
        success: false,
        error: "previoussigner not found"
      });
    }

    await OrderItem.destroy({
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};
