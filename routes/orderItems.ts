import express from "express";

import {
  getOrderItems,
  getSingleOrderItem,
  addOrderItem,
  updateOrderItem,
  deleteOrderItem
} from "../controllers/orderItems";

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
