const Truck = require('../models/Truck');

// @desc Get all trucks
// @route GET /trucks
// @access User
exports.getTrucks = async (req, res) => {
  try {
    const trucks = await Truck.findAll();

    return res.status(200).json({
      success: true,
      count: trucks.length,
      data: trucks,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Get single truck
// @route GET /trucks/:id
// @access User
exports.getSingleTruck = async (req, res) => {
  try {
    const truck = await Truck.findOne({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: truck,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Add truck
// @route POST /trucks
// @access User
exports.addTruck = async (req, res) => {
  try {
    const truck = await Truck.create(req.body);

    return res.status(200).json({
      success: true,
      data: truck,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

exports.addBulkTrucks = async (req, res) => {
  try {
    const trucks = await Truck.bulkCreate(req.body);

    return res.status(200).json({
      success: true,
      count: trucks.length,
      data: trucks,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Update truck
// @route UPDATE /trucks/:id
// @access User
exports.updateTruck = async (req, res) => {
  try {
    const truck = await Truck.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!truck) {
      return res.status(404).json({
        success: false,
        error: 'Truck not found',
      });
    }

    await Truck.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: truck,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete truck
// @route DELETE /trucks/:id
// @access User
exports.deleteTruck = async (req, res) => {
  try {
    const truck = await Truck.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!truck) {
      return res.status(404).json({
        success: false,
        error: 'Truck not found',
      });
    }

    await Truck.destroy({
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
