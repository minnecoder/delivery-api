const express = require('express');
// const verify = require('../auth/verifyToken');
const {
  getStops,
  getSingleStop,
  addStop,
  updateStop,
  deleteStop,
} = require('../controllers/stops');

const router = express.Router();

router
  .route('/')
  .get(getStops)
  .post(addStop);

router
  .route('/:id')
  .get(getSingleStop)
  .put(updateStop)
  .delete(deleteStop);

module.exports = router;
