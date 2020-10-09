const express = require("express");

const {
  getOrderItems,
  getSingleOrderItems,
  addOrderItems,
  updateOrderItems,
  deleteOrderItem
} = require("../controllers/orderItems");

const router = express.Router();

router
  .route("/")
  .get(getOrderItems)
  .post(addOrderItems);

router
  .route("/:id")
  .get(getSingleOrderItems)
  .put(updateOrderItems)
  .delete(deleteOrderItem);

module.exports = router;
