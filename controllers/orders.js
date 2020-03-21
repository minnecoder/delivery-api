const Order = require('../models/Order');
const Customer = require('../models/Customer');
// const verify = require('../auth/verifyToken');

// @desc Get all orders
// @route GET /orders
// @access User
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: Customer,
    });

    return res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Get single order
// @route GET /orders/:id
// @access User
exports.getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id,
      },
      include: Customer,
    });

    return res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Add order
// @route POST /orders
// @access User
exports.addOrder = async (req, res) => {
  try {
    // Check if customerID is found
    const customer = await Customer.findOne({
      where: {
        id: req.body.customerId,
      },
    });

    if (!customer) {
      return res.status(404).json({
        sucess: false,
        error: 'The customerID was not found',
      });
    }
    const order = await Order.create(req.body);

    return res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Update order
// @route UPDATE /orders/:id
// @access User
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Order not found',
      });
    }

    await Order.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete order
// @route DELETE /orders/:id
// @access User
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Order not found',
      });
    }

    await Order.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
