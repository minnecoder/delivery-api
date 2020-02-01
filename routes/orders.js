const express = require("express");
const verify = require("../routes/verifyToken");
const { orderCUDAccess } = require("./verifyRoles");
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
  .post(verify, orderCUDAccess, addOrder);

router
  .route("/:orderID")
  .get(getSingleOrder)
  .put(verify, orderCUDAccess, updateOrder)
  .delete(verify, orderCUDAccess, deleteOrder);

module.exports = router;
