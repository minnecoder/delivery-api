const express = require("express");
const { getNotes, addNote } = require("../controllers/notes");

const router = express.Router();

router
  .route("/")
  .get(getNotes)
  .post(addNote);
module.exports = router;
