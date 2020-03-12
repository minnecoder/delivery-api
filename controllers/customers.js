const Customer = require('../models/Customer');
const verify = require('../routes/verifyToken');

// @desc Get all customers
// @route GET /customers
// @access User
exports.getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.findAll();

    return res.status(200).json({
      success: true,
      count: customers.length,
      data: customers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Get single customer
// @route GET /customers/:id
// @access User
exports.getSingleCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id).select(
      'firstName lastName address city state zipCode phone email'
    );

    return res.status(200).json({
      success: true,
      data: customer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Add customer
// @route POST /customers
// @access User
exports.addCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.create(req.body);

    return res.status(200).json({
      success: true,
      data: customer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Update customer
// @route UPDATE /customers/:id
// @access User
exports.updateCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id).exec();
    customer.set(req.body);
    await customer.save();
    return res.status(200).json({
      success: true,
      data: customer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete customer
// @route DELETE /customers/:id
// @access User
exports.deleteCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({
        success: false,
        error: 'Customer not found',
      });
    }

    customer.remove();

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
