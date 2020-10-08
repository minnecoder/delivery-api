const CustomerHours = require("../models/CustomerHours");

// @desc Get customer hours for all customers
// @route GET /customerhours
// @access All
exports.getCustomerHours = async (req, res) => {
  try {
    const customerhours = await CustomerHours.findAll();

    return res.status(200).json({
      success: true,
      count: customerhours.length,
      data: customerhours
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get customer hours for single customer
// @route GET /customerhours/:id
// @access All
exports.getSingleCustomerHours = async (req, res) => {
  try {
    const customerhours = await CustomerHours.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({
      success: true,
      data: customerhours
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add customer hours for customer
// @route POST /customerhours/:id
// @access Admin
exports.addCustomerHours = async (req, res) => {
  try {
    const customerhours = await CustomerHours.create(req.body);

    return res.status(200).json({
      success: true,
      data: customerhours
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update customer hours
// @route UPDATE /customerhours/:id
// @access Admin
exports.updateCustomerHours = async (req, res) => {
  try {
    const customerhours = await CustomerHours.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!customerhours) {
      return res.status(404).json({
        success: false,
        error: "Customer Hours not found"
      });
    }
    await CustomerHours.update(req.body, {
      whewre: {
        id: req.params.id
      }
    });
    return res.status(200).json({
      success: true,
      data: customerhours
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete customer hours
// @route DELETE /customerhours/:id
// @access Admin
exports.deleteCustomerHours = async (req, res) => {
  try {
    const customerhours = await CustomerHours.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!customerhours) {
      return res.status(404).json({
        success: false,
        error: "Customer Hours not found"
      });
    }

    await CustomerHours.destroy({
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
