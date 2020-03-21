const express = require('express');
// const verify = require('../auth/verifyToken');
// const { orderCUDAccess } = require('../auth/verifyRoles');
const {
  getOrders,
  getSingleOrder,
  addOrder,
  updateOrder,
  deleteOrder,
  // changeOrderStatus,
} = require('../controllers/orders');

const router = express.Router();

router
  .route('/')
  .get(getOrders)
  .post(addOrder);
// .post(verify, orderCUDAccess, addOrder);

router
  .route('/:orderID')
  .get(getSingleOrder)
  .put(updateOrder)
  .delete(deleteOrder);
// .put(verify, orderCUDAccess, updateOrder)
// .delete(verify, orderCUDAccess, deleteOrder);

module.exports = router;
