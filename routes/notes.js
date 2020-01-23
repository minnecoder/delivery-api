const express = require("express");
const verify = require("../routes/verifyToken");
const { getNotes, addNote } = require("../controllers/notes");

const router = express.Router();

router
  .route("/")
  .get(verify, getNotes)
  .post(verify, addNote);
module.exports = router;
