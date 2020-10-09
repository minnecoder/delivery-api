const express = require("express");
// const verify = require('../auth/verifyToken');
const {
  getCustomerNotes,
  getSingleCustomerNote,
  addCustomerNote,
  updateCustomerNote,
  deleteCustomerNote
} = require("../controllers/customerNotes");

const router = express.Router();

router
  .route("/")
  .get(getCustomerNotes)
  .post(addCustomerNote);

router
  .route("/:id")
  .get(getSingleCustomerNote)
  .put(updateCustomerNote)
  .delete(deleteCustomerNote);

module.exports = router;
