exports.getNotes = (req, res, next) => {
  res.send("This will return all notes");
};

exports.getSingleNote = (req, res, next) => {
  res.send("This is one note");
};
