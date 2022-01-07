import express from "express";
import {
  getDriverReports,
  getSingleDriverReport,
  addDriverReport,
  updateDriverReport,
  deleteDriverReport
} from "../controllers/driverReport";

const router = express.Router();

router
  .route("/")
  .get(getDriverReports)
  .post(addDriverReport);

router
  .route("/:id")
  .get(getSingleDriverReport)
  .put(updateDriverReport)
  .delete(deleteDriverReport);

router.route("/update").post(updateDriverReport);
module.exports = router;
