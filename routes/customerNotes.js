const express = require("express");
// const verify = require('../auth/verifyToken');
const {
  getCustomerNotes,
  getSingleCustomerNotes,
  addCustomerNotes,
  updateCustomerNotes,
  deleteCustomerNotes
} = require("../controllers/customerNotes");

const router = express.Router();

router
  .route("/")
  .get(getCustomerNotes)
  .post(addCustomerNotes);

router
  .route("/:id")
  .get(getSingleCustomerNotes)
  .put(updateCustomerNotes)
  .delete(deleteCustomerNotes);

module.exports = router;
