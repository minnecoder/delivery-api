// @desc  Get all notes
// @route GET /notes
// @access Public
exports.getNotes = (req, res, next) => {
  res.send("This will return all notes");
};

// @desc  Get single note
// @route GET /notes/:id
// @access Public
exports.getSingleNote = (req, res, next) => {
  res.send("This is one note");
};
