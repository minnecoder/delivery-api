const express = require("express");
const verify = require("../routes/verifyToken");
const {
  getCustomers,
  addCustomers,
  updateCustomers,
  deleteCustomers
} = require("../controllers/customers");

const router = express.Router();

router
  .route("/")
  .get(getCustomers)
  .post(addCustomers)
  .update(updateCustomers)
  .delete(deleteCustomers);
