import express from "express";
// import verify from '../auth/verifyToken');
import {
  getDrivers,
  getSingleDriver,
  addDriver,
  addBulkDrivers,
  updateDriver,
  deleteDriver
} from "../controllers/drivers";

const router = express.Router();

router
  .route("/")
  .get(getDrivers)
  .post(addDriver);

router
  .route("/:id")
  .get(getSingleDriver)
  .put(updateDriver)
  .delete(deleteDriver);

router.route("/bulk").post(addBulkDrivers);

module.exports = router;
