const CustomerNote = require("../models/CustomerNote");

// @desc Get all customer notes
// @route GET /customernotes
// @access User
exports.getCustomerNotes = async (req, res) => {
  try {
    const customernotes = await CustomerNote.findAll();

    return res.status(200).json({
      success: true,
      count: customernotes.length,
      data: customernotes
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single customer note
// @route GET /customernotes/:id
// @access User
exports.getSingleCustomerNote = async (req, res) => {
  try {
    const customernote = await CustomerNote.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!customernote) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: customernote
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add customer note
// @route POST /customernotes
// @access User
exports.addCustomerNote = async (req, res) => {
  try {
    const customernote = await CustomerNote.create(req.body);

    return res.status(200).json({
      success: true,
      data: customernote
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

exports.addBulkCustomerNotes = async (req, res) => {
  try {
    const customernotes = await CustomerNote.bulkCreate(req.body);

    return res.status(200).json({
      success: true,
      count: customernotes.length,
      data: customernotes
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update customer note
// @route UPDATE /customernotes/:id
// @access User
exports.updateCustomerNote = async (req, res) => {
  try {
    const customernote = await CustomerNote.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!customernote) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    await CustomerNote.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: customernote
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete customer note
// @route DELETE /customernotes/:id
// @access User
exports.deleteCustomerNote = async (req, res) => {
  try {
    const customernote = await CustomerNote.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!customernote) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    await CustomerNote.destroy({
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
