const express = require('express');
const verify = require('../routes/verifyToken');
const {
  getOrderItems,
  getSingleOrderItem,
  addOrderItem,
  updateOrderItem,
  deleteOrderItem,
} = require('../controllers/orderItem');

const router = express.Router();

router
  .route('/')
  .get(getOrderItems)
  .post(addOrderItem);

router
  .route('/:id')
  .get(getSingleOrderItem)
  .put(updateOrderItem)
  .delete(deleteOrderItem);

module.exports = router;
