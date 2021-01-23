const Vehicle = require("../models/Vehicle");

// @desc Get all vehicles
// @route GET /vehicles
// @access User
exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();

    return res.status(200).json({
      success: true,
      count: vehicles.length,
      data: vehicles
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single vehicle
// @route GET /vehicles/:id
// @access User
exports.getSingleVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: vehicle
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add vehicle
// @route POST /vehicles
// @access User
exports.addVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);

    return res.status(200).json({
      success: true,
      data: vehicle
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.addBulkVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.bulkCreate(req.body);

    return res.status(200).json({
      success: true,
      count: vehicles.length,
      data: vehicles
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update vehicle
// @route UPDATE /vehicles/:id
// @access User
exports.updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: "Vehicle not found"
      });
    }

    await Vehicle.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: vehicle
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete vehicle
// @route DELETE /vehicles/:id
// @access User
exports.deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: "Vehicle not found"
      });
    }

    await Vehicle.destroy({
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
