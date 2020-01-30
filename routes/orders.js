const express = require("express");
const verify = require("../routes/verifyToken");
const {
  getOrders,
  getSingleOrder,
  addOrder,
  updateOrder,
  deleteOrder,
  changeOrderStatus
} = require("../controllers/orders");

const router = express.Router();

router
  .route("/")
  .get(getOrders)
  .post(addOrder);

router
  .route("/:orderID")
  .get(getSingleOrder)
  .put(updateOrder)
  .delete(deleteOrder);

module.exports = router;
