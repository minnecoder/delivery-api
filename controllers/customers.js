const Customer = require("../models/Customer");
// const verify = require('../auth/verifyToken');

// @desc Get all customers
// @route GET /customers
// @access User
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();

    return res.status(200).json({
      success: true,
      count: customers.length,
      data: customers
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single customer
// @route GET /customers/:id
// @access User
exports.getSingleCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!customer) {
      return res.status(404).json({
        success: false,
        error: "Customer not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: customer
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add customer
// @route POST /customers
// @access User
exports.addCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);

    // create new previous signers entry

    // create new customer notes entry

    // create new customer hours entry

    return res.status(200).json({
      success: true,
      data: customer
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add multiple customers at once
// @route POST /customers/bulk
// @access User
exports.addBulkCustomers = async (req, res) => {
  try {
    const customers = await Customer.bulkCreate(req.body);

    return res.status(200).json({
      success: true,
      count: customers.length,
      data: customers
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update customer
// @route UPDATE /customers/:id
// @access User
exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!customer) {
      return res.status(404).json({
        success: false,
        error: "Customer not found"
      });
    }

    await Customer.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: customer
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete customer
// @route DELETE /customers/:id
// @access User
exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!customer) {
      return res.status(404).json({
        success: false,
        error: "Customer not found"
      });
    }

    await Customer.destroy({
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
