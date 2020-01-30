const express = require("express");
const verify = require("../routes/verifyToken");
const {
  getCustomers,
  getSingleCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer
} = require("../controllers/customers");

const router = express.Router();

router
  .route("/")
  .get(verify, getCustomers)
  .post(addCustomer);

router
  .route("/:id")
  .get(getSingleCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);
module.exports = router;
