const express = require("express");

const {
  getOrderItems,
  getSingleOrderItem,
  addOrderItem,
  updateOrderItem,
  deleteOrderItem
} = require("../controllers/orderItems");

const router = express.Router();

router
  .route("/")
  .get(getOrderItems)
  .post(addOrderItem);

router
  .route("/:id")
  .get(getSingleOrderItem)
  .put(updateOrderItem)
  .delete(deleteOrderItem);

module.exports = router;
