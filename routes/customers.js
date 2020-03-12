const express = require('express');
const verify = require('../routes/verifyToken');
const { customerCUDAccess } = require('./verifyRoles');
const {
  getCustomers,
  getSingleCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customers');

const router = express.Router();

router
  .route('/')
  .get(getCustomers)
  .post(addCustomer);
// .post(verify, customerCUDAccess, addCustomer);

router
  .route('/:id')
  .get(getSingleCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);
// .put(verify, customerCUDAccess, updateCustomer)
// .delete(verify, customerCUDAccess, deleteCustomer);
module.exports = router;
