const Product = require('../models/Product');
const verify = require('../routes/verifyToken');

// @desc Get all products
// @route GET /products
// @access User
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Get single product
// @route GET /products/:id
// @access User
exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Add product
// @route POST /products
// @access User
exports.addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Update product
// @route UPDATE /products/:id
// @access User
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).exec();
    product.set(req.body);
    await product.save();
    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete product
// @route DELETE /products/:id
// @access User
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found',
      });
    }
    product.remove();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
