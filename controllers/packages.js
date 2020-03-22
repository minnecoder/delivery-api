const Package = require('../models/Package');
const Order = require('../models/Order');
const Product = require('../models/Product');

// @desc Get all packages
// @route GET /packages
// @access User
exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.findAll({
      include: [Order, Product],
    });

    return res.status(200).json({
      success: true,
      count: packages.length,
      data: packages,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Get single package
// @route GET /packages/:id
// @access User
exports.getSinglePackage = async (req, res) => {
  try {
    const packages = await Package.findOne({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: packages,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Add package
// @route POST /packages
// @access User
exports.addPackage = async (req, res) => {
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
    const packages = await Package.create(req.body);

    return res.status(200).json({
      success: true,
      data: packages,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Update package
// @route UPDATE /packages/:id
// @access User
exports.updatePackage = async (req, res) => {
  try {
    const packages = await Package.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!packages) {
      return res.status(404).json({
        success: false,
        error: 'package not found',
      });
    }

    await packages.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: packages,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete package
// @route DELETE /packages/:id
// @access User
exports.deletePackage = async (req, res) => {
  try {
    const packages = await Package.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!packages) {
      return res.status(404).json({
        success: false,
        error: 'Order item not found',
      });
    }

    await packages.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};
