const Driver = require("../models/Driver");
// const verify = require('../auth/verifyToken');

// @desc Get all drivers
// @route GET /drivers
// @access User
exports.getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.findAll();

    return res.status(200).json({
      success: true,
      count: drivers.length,
      data: drivers
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single driver
// @route GET /drivers/:id
// @access User
exports.getSingleDriver = async (req, res) => {
  try {
    const driver = await Driver.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!driver) {
      return res.status(404).json({
        success: false,
        error: "Driver not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: driver
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add driver
// @route POST /drivers
// @access User
exports.addDriver = async (req, res) => {
  try {
    const driver = await Driver.create(req.body);

    return res.status(200).json({
      success: true,
      data: driver
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.addBulkDrivers = async (req, res) => {
  try {
    const drivers = await Driver.bulkCreate(req.body);

    return res.status(200).json({
      success: true,
      count: drivers.length,
      data: drivers
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update driver
// @route UPDATE /drivers/:id
// @access User
exports.updateDriver = async (req, res) => {
  try {
    const driver = await Driver.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!driver) {
      return res.status(404).json({
        success: false,
        error: "Driver not found"
      });
    }

    await driver.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: driver
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete driver
// @route DELETE /drivers/:id
// @access User
exports.deleteDriver = async (req, res) => {
  try {
    const driver = await Driver.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!driver) {
      return res.status(404).json({
        success: false,
        error: "Driver not found"
      });
    }

    await driver.destroy({
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
