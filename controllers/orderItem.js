const OrderItem = require('../models/OrderItem');
const Order = require('../models/Order');
const Product = require('../models/Product');

// @desc Get all order items
// @route GET /orderitems
// @access User
exports.getOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.findAll({
      include: [Order, Product],
    });

    return res.status(200).json({
      success: true,
      count: orderItems.length,
      data: orderItems,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Get single order item
// @route GET /orderitems/:id
// @access User
exports.getSingleOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItem.findOne({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: orderItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Add order item
// @route POST /orderitems
// @access User
exports.addOrderItem = async (req, res) => {
  try {
    // Check if orderID is found
    const order = await Order.findOne({
      where: {
        id: req.body.orderId,
      },
    });

    if (!order) {
      return res.status(404).json({
        sucess: false,
        error: 'The orderID was not found',
      });
    }
    const product = await Product.findOne({
      where: {
        id: req.body.productId,
      },
    });

    if (!product) {
      return res.status(404).json({
        sucess: false,
        error: 'The productID was not found',
      });
    }
    const orderItem = await OrderItem.create(req.body);

    return res.status(200).json({
      success: true,
      data: orderItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Update order item
// @route UPDATE /orderitems/:id
// @access User
exports.updateOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItem.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!orderItem) {
      return res.status(404).json({
        success: false,
        error: 'Order item not found',
      });
    }

    await OrderItem.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: orderItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete order item
// @route DELETE /orderitems/:id
// @access User
exports.deleteOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItem.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!orderItem) {
      return res.status(404).json({
        success: false,
        error: 'Order item not found',
      });
    }

    await OrderItem.destroy({
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