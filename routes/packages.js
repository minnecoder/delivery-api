const express = require('express');
// const verify = require('../auth/verifyToken');
const {
  getPackages,
  getSinglePackage,
  addPackage,
  updatePackage,
  deletePackage,
} = require('../controllers/packages');

const router = express.Router();

router
  .route('/')
  .get(getPackages)
  .post(addPackage);

router
  .route('/:id')
  .get(getSinglePackage)
  .put(updatePackage)
  .delete(deletePackage);

module.exports = router;
