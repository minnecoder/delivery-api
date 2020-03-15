const express = require('express');
const verify = require('../routes/verifyToken');
const {
  getDrivers,
  getSingleDriver,
  addDriver,
  addBulkDrivers,
  updateDriver,
  deleteDriver,
} = require('../controllers/drivers');

const router = express.Router();

router
  .route('/')
  .get(getDrivers)
  .post(addDriver);

router
  .route('/:id')
  .get(getSingleDriver)
  .put(updateDriver)
  .delete(deleteDriver);

router.route('/bulk').post(addBulkDrivers);

module.exports = router;
