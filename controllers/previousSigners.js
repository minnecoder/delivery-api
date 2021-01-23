const PreviousSigner = require("../models/PreviousSigner");

// @desc Get all previous signers
// @route GET /previoussigners
// @access User
exports.getPreviousSigners = async (req, res) => {
  try {
    const previoussigners = await PreviousSigner.findAll();

    return res.status(200).json({
      success: true,
      count: previoussigners.length,
      data: previoussigners
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single previous signer
// @route GET /previoussigners/:id
// @access User
exports.getSinglePreviousSigner = async (req, res) => {
  try {
    const previoussigner = await PreviousSigner.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!previoussigner) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: previoussigner
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add previous signer
// @route POST /previoussigners
// @access User
exports.addPreviousSigner = async (req, res) => {
  try {
    const previoussigner = await PreviousSigner.create(req.body);

    return res.status(200).json({
      success: true,
      data: previoussigner
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.addBulkPreviousSigners = async (req, res) => {
  try {
    const previoussigners = await PreviousSigner.bulkCreate(req.body);

    return res.status(200).json({
      success: true,
      count: previoussigners.length,
      data: previoussigners
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update previous signer
// @route UPDATE /previoussigners/:id
// @access User
exports.updatePreviousSigner = async (req, res) => {
  try {
    const previoussigner = await PreviousSigner.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!previoussigner) {
      return res.status(404).json({
        success: false,
        error: "previoussigner not found"
      });
    }

    await PreviousSigner.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: previoussigner
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete previous signer
// @route DELETE /previoussigners/:id
// @access User
exports.deletePreviousSigner = async (req, res) => {
  try {
    const previoussigner = await PreviousSigner.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!previoussigner) {
      return res.status(404).json({
        success: false,
        error: "previoussigner not found"
      });
    }

    await PreviousSigner.destroy({
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
