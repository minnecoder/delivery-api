const Note = require("../models/Note");
const Joi = require("@hapi/joi");

// Validation
const schema = {
  custName: Joi.string().required(),
  address: Joi.string().required(),
  suite: Joi.string().required(),
  city: Joi.string().required(),
  deliveryLocation: Joi.string().required(),
  notes: Joi.string().required()
};

// @desc  Get all notes
// @route GET /notes
// @access Public
exports.getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find();

    return res.status(200).json({
      success: true,
      count: notes.length,
      data: notes
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc  Add note
// @route POST /notes
// @access Public
exports.addNote = async (req, res, next) => {
  try {
    const note = await Note.create(req.body);

    return res.status(200).json({
      success: true,
      data: note
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
