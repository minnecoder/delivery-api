const express = require("express");
const verify = require("../routes/verifyToken");
const {
  getOrders,
  getSingleOrder,
  addOrder,
  updateOrder,
  deleteOrder
} = require("../controllers/orders");

const router = express.Router();

router
  .route("/")
  .get(getOrders)
  .post(addOrder);

router
  .route("/:id")
  .get(getSingleOrder)
  .put(updateOrder)
  .delete(deleteOrder);
module.exports = router;
