const Product = require("../models/Product");
// const verify = require('../auth/verifyToken');

// @desc Get all products
// @route GET /products
// @access User
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single product
// @route GET /products/:id
// @access User
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!product) {
      return res.status(404).json({
        error: "The id was not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add product
// @route POST /products
// @access User
exports.addProduct = async (req, res) => {
  try {
    // Check if the body of the request has data
    if (Object.keys(req.body).length === 0) {
      return res.status(404).json({
        error: "The body can not be empty"
      });
    }

    const product = await Product.create(req.body);

    return res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.addBulkProducts = async (req, res) => {
  try {
    const products = await Product.bulkCreate(req.body);

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update product
// @route UPDATE /products/:id
// @access User
exports.updateProduct = async (req, res) => {
  // Check if the body of the request has data
  if (Object.keys(req.body).length === 0) {
    return res.status(404).json({
      error: "The body can not be empty"
    });
  }
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id
      }
    });

    // Check to see if the product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        error: "Product not found"
      });
    }

    await Product.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete product
// @route DELETE /products/:id
// @access User
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        error: "Product not found"
      });
    }

    await Product.destroy({
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
