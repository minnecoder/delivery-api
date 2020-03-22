const DriverReport = require('../models/DriverReport');

// @desc Get all driver reports
// @route GET /driverreports
// @access User
exports.getDriverReports = async (req, res) => {
  try {
    const driverReports = await DriverReport.findAll();

    return res.status(200).json({
      success: true,
      count: driverReports.length,
      data: driverReports,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Get single driver report
// @route GET /driverreports/:id
// @access User
exports.getSingleDriverReport = async (req, res) => {
  try {
    const driverReport = await DriverReport.findOne({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: driverReport,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Add driverReport
// @route POST /driverReports
// @access User
exports.addDriverReport = async (req, res) => {
  try {
    const driverReport = await DriverReport.create(req.body);

    return res.status(200).json({
      success: true,
      data: driverReport,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Update driver report
// @route UPDATE /driverreports/:id
// @access User
exports.updateDriverReport = async (req, res) => {
  try {
    const driverReport = await DriverReport.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!driverReport) {
      return res.status(404).json({
        success: false,
        error: 'Driver report not found',
      });
    }

    await driverReport.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: driverReport,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete driver report
// @route DELETE /driverreports/:id
// @access User
exports.deleteDriverReport = async (req, res) => {
  try {
    const driverReport = await DriverReport.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!driverReport) {
      return res.status(404).json({
        success: false,
        error: 'Driver report not found',
      });
    }

    await driverReport.destroy({
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
