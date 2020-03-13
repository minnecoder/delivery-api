const express = require('express');
const verify = require('../routes/verifyToken');
const {
  getDrivers,
  getSingleDriver,
  addDriver,
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

module.exports = router;
