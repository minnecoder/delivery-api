const Product = require("../models/Product");
const verify = require("../routes/verifyToken");
const { productValidation } = require("../validation");

// @desc Get all products
// @route GET /products
// @access User
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
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
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add product
// @route POST /products
// @access User
exports.addProduct = async (req, res, next) => {
  // Validate data before adding
  const { error } = productValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const product = await Product.create(req.body);

    return res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update product
// @route UPDATE /products/:id
// @access User
exports.updateProduct = async (req, res, next) => {
  try {
    const product = awaitProduct.findById(req.params.id).exec();
    product.set(req.body);
    const result = await product.save();
    return res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete product
// @route DELETE /products/:id
// @access User
exports.deleteProduct = async (req, res, next) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      success: true
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
