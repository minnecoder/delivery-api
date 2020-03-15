const express = require('express');
const verify = require('../routes/verifyToken');
const {
  getDeliveryRoutes,
  getSingleDeliveryRoute,
  addDeliveryRoute,
  addBulkDeliveryRoutes,
  updateDeliveryRoute,
  deleteDeliveryRoute,
} = require('../controllers/deliveryRoutes');

const router = express.Router();

router
  .route('/')
  .get(getDeliveryRoutes)
  .post(addDeliveryRoute);

router
  .route('/:id')
  .get(getSingleDeliveryRoute)
  .put(updateDeliveryRoute)
  .delete(deleteDeliveryRoute);

router.route('/bulk').post(addBulkDeliveryRoutes);

module.exports = router;
