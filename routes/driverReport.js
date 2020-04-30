const express = require('express');
const {
  getDriverReports,
  getSingleDriverReport,
  addDriverReport,
  updateDriverReport,
  deleteDriverReport,
  saveBreak,
} = require('../controllers/driverReport');

const router = express.Router();

router
  .route('/')
  .get(getDriverReports)
  .post(addDriverReport);

router
  .route('/:id')
  .get(getSingleDriverReport)
  .put(updateDriverReport)
  .delete(deleteDriverReport);

router.route('/:route/:date').post(saveBreak);
module.exports = router;
