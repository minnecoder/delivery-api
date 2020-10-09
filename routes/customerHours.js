const express = require("express");
// const verify = require('../auth/verifyToken');
const {
  getCustomerHours,
  getSingleCustomerHours,
  addCustomerHours,
  updateCustomerHours,
  deleteCustomerHours
} = require("../controllers/customerHours");

const router = express.Router();

router
  .route("/")
  .get(getCustomerHours)
  .post(addCustomerHours);

router
  .route("/:id")
  .get(getSingleCustomerHours)
  .put(updateCustomerHours)
  .delete(deleteCustomerHours);

module.exports = router;
