const Driver = require('../models/Driver');
const verify = require('../routes/verifyToken');

// @desc Get all drivers
// @route GET /drivers
// @access User
exports.getdrivers = async (req, res, next) => {
  try {
    const drivers = await Driver.findAll();

    return res.status(200).json({
      success: true,
      count: drivers.length,
      data: drivers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Get single driver
// @route GET /drivers/:id
// @access User
exports.getSingledriver = async (req, res, next) => {
  try {
    const driver = await Driver.findOne({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: driver,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Add driver
// @route POST /drivers
// @access User
exports.adddriver = async (req, res, next) => {
  try {
    const driver = await Driver.create(req.body);

    return res.status(200).json({
      success: true,
      data: driver,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Update driver
// @route UPDATE /drivers/:id
// @access User
exports.updatedriver = async (req, res, next) => {
  try {
    const driver = await Driver.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!driver) {
      return res.status(404).json({
        success: false,
        error: 'Driver not found',
      });
    }

    await driver.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: driver,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete driver
// @route DELETE /drivers/:id
// @access User
exports.deletedriver = async (req, res, next) => {
  try {
    const driver = await Driver.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!driver) {
      return res.status(404).json({
        success: false,
        error: 'Driver not found',
      });
    }

    await driver.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
