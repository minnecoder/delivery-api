const Note = require("../models/Note");
const { noteValidation } = require("../validation");

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
  // Validate data before adding
  const { error } = noteValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

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
