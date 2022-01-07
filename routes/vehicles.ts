import express from "express";
// import verify from '../auth/verifyToken');
import {
  getVehicles,
  getSingleVehicle,
  addVehicle,
  addBulkVehicles,
  updateVehicle,
  deleteVehicle
} from "../controllers/vehicles";

const router = express.Router();

router
  .route("/")
  .get(getVehicles)
  .post(addVehicle);

router
  .route("/:id")
  .get(getSingleVehicle)
  .put(updateVehicle)
  .delete(deleteVehicle);

router.route("/bulk").post(addBulkVehicles);

module.exports = router;
