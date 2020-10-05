const express = require("express");
// const verify = require('../auth/verifyToken');
const {
  getVehicles,
  getSingleVehicle,
  addVehicle,
  addBulkVehicles,
  updateVehicle,
  deleteVehicle
} = require("../controllers/vehicles");

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
