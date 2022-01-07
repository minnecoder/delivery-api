import express from "express";
// import verify from '../auth/verifyToken');
// import { customerCUDAccess } from '../auth/verifyRoles');
import {
  getCustomers,
  getSingleCustomer,
  addCustomer,
  addBulkCustomers,
  updateCustomer,
  deleteCustomer
} from "../controllers/customers";

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
