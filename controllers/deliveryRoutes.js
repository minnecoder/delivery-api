const DeliveryRoute = require("../models/DeliveryRoute");

// @desc Get all deliveryRoutes
// @route GET /deliveryRoutes
// @access User
exports.getDeliveryRoutes = async (req, res) => {
  try {
    const deliveryRoutes = await DeliveryRoute.findAll();

    return res.status(200).json({
      success: true,
      count: deliveryRoutes.length,
      data: deliveryRoutes
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single deliveryRoute
// @route GET /deliveryRoutes/:id
// @access User
exports.getSingleDeliveryRoute = async (req, res) => {
  try {
    const deliveryRoute = await DeliveryRoute.findOne({
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: deliveryRoute
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add deliveryRoute
// @route POST /deliveryRoutes
// @access User
exports.addDeliveryRoute = async (req, res) => {
  try {
    const deliveryRoute = await DeliveryRoute.create(req.body);

    return res.status(200).json({
      success: true,
      data: deliveryRoute
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.addBulkDeliveryRoutes = async (req, res) => {
  try {
    const deliveryRoutes = await DeliveryRoute.bulkCreate(req.body);

    return res.status(200).json({
      success: true,
      count: deliveryRoutes.length,
      data: deliveryRoutes
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update deliveryRoute
// @route UPDATE /deliveryRoutes/:id
// @access User
exports.updateDeliveryRoute = async (req, res) => {
  try {
    const deliveryRoute = await DeliveryRoute.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!deliveryRoute) {
      return res.status(404).json({
        success: false,
        error: "Delivery Route not found"
      });
    }

    await deliveryRoute.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: deliveryRoute
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete deliveryRoute
// @route DELETE /deliveryRoutes/:id
// @access User
exports.deleteDeliveryRoute = async (req, res) => {
  try {
    const deliveryRoute = await DeliveryRoute.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!deliveryRoute) {
      return res.status(404).json({
        success: false,
        error: "Delivery Route not found"
      });
    }

    await DeliveryRoute.destroy({
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
