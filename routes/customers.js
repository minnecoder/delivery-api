const express = require("express");
// const verify = require('../auth/verifyToken');
// const { customerCUDAccess } = require('../auth/verifyRoles');
const {
  getCustomers,
  getSingleCustomer,
  addCustomer,
  addBulkCustomers,
  updateCustomer,
  deleteCustomer
} = require("../controllers/customers");

const router = express.Router();

router
  .route("/")
  .get(getCustomers)
  .post(addCustomer);
// .post(verify, customerCUDAccess, addCustomer);

router
  .route("/:id")
  .get(getSingleCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);
// .put(verify, customerCUDAccess, updateCustomer)
// .delete(verify, customerCUDAccess, deleteCustomer);

router.route("/bulk").post(addBulkCustomers);
module.exports = router;
