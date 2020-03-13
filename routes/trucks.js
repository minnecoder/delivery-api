const express = require('express');
const verify = require('../routes/verifyToken');
const {
  getTrucks,
  getSingleTruck,
  addTruck,
  updateTruck,
  deleteTruck,
} = require('../controllers/trucks');

const router = express.Router();

router
  .route('/')
  .get(getTrucks)
  .post(addTruck);

router
  .route('/:id')
  .get(getSingleTruck)
  .put(updateTruck)
  .delete(deleteTruck);

module.exports = router;
