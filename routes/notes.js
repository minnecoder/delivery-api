const express = require('express');
const verify = require('../routes/verifyToken');
// const { notesCRUAccess, notesDeleteAccess } = require("./verifyRoles");
const {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
  getSingleNote,
} = require('../controllers/notes');

const router = express.Router();

router
  .route('/')
  .get(verify, getNotes)
  .post(verify, addNote);

router
  .route('/:id')
  .get(verify, getSingleNote)
  .put(verify, updateNote)
  .delete(verify, deleteNote);
module.exports = router;
