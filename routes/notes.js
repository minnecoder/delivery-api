const express = require("express");
const verify = require("../routes/verifyToken");
const { notesCRUAccess, notesDeleteAccess } = require("./verifyRoles");
const {
  getNotes,
  addNote,
  updateNote,
  deleteNote
} = require("../controllers/notes");

const router = express.Router();

router
  .route("/")
  .get(verify, notesCRUAccess, getNotes)
  .post(verify, notesCRUAccess, addNote)
  .put(verify, notesCRUAccess, updateNote)
  .delete(verify, notesDeleteAccess, deleteNote);
module.exports = router;
