const express = require("express");
const verify = require("../routes/verifyToken");
const {
  getOrders,
  addOrders,
  updateOrders,
  deleteOrders
} = require("../controllers/orders");

const router = express.Router();

router
  .route("/")
  .get(getOrders)
  .post(addOrders)
  .update(updateOrders)
  .delete(deleteOrders);
