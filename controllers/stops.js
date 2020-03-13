const Stop = require('../models/Stop');
const Customer = require('../models/Customer');
const Order = require('../models/Order');
const DeliveryRoute = require('../models/DeliveryRoute');
const Truck = require('../models/Truck');

// @desc Get all stops
// @route GET /stops
// @access User
exports.getStops = async (req, res) => {
  try {
    const stops = await Stop.findAll({
      include: [Customer, Order, DeliveryRoute, Truck],
    });

    return res.status(200).json({
      success: true,
      count: stops.length,
      data: stops,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Get single stop
// @route GET /stops/:id
// @access User
exports.getSingleStop = async (req, res) => {
  try {
    const stop = await Stop.findOne({
      where: {
        id: req.params.id,
      },
      include: [Customer, Order, DeliveryRoute, Truck],
    });

    return res.status(200).json({
      success: true,
      data: stop,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Add order
// @route POST /orders
// @access User
exports.addStop = async (req, res) => {
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

    const deliveryRoute = await DeliveryRoute.findOne({
      where: {
        id: req.body.deliveryRouteId,
      },
    });

    if (!deliveryRoute) {
      return res.status(404).json({
        sucess: false,
        error: 'The deliveryRouteID was not found',
      });
    }

    const truck = await Truck.findOne({
      where: {
        id: req.body.truckId,
      },
    });

    if (!truck) {
      return res.status(404).json({
        sucess: false,
        error: 'The truckID was not found',
      });
    }

    const stop = await Stop.create(req.body);

    return res.status(200).json({
      success: true,
      data: stop,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
