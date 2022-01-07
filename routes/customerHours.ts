import express from "express";
// const verify = require('../auth/verifyToken');
import {
  getCustomerHours,
  getSingleCustomerHours,
  addCustomerHours,
  updateCustomerHours,
  deleteCustomerHours
} from "../controllers/customerHours";

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
