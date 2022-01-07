import express from "express";
// import verify from '../auth/verifyToken');
// import { orderCUDAccess } from '../auth/verifyRoles');
import {
  getOrders,
  getSingleOrder,
  addOrder,
  updateOrder,
  deleteOrder
  // changeOrderStatus,
} from "../controllers/orders";

const router = express.Router();

router
  .route("/")
  .get(getOrders)
  .post(addOrder);
// .post(verify, orderCUDAccess, addOrder);

router
  .route("/:id")
  .get(getSingleOrder)
  .put(updateOrder)
  .delete(deleteOrder);
// .put(verify, orderCUDAccess, updateOrder)
// .delete(verify, orderCUDAccess, deleteOrder);

module.exports = router;
