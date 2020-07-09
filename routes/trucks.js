const express = require("express");
// const verify = require('../auth/verifyToken');
const {
  getTrucks,
  getSingleTruck,
  addTruck,
  addBulkTrucks,
  updateTruck,
  deleteTruck
} = require("../controllers/trucks");

const router = express.Router();

router
  .route("/")
  .get(getTrucks)
  .post(addTruck);

router
  .route("/:id")
  .get(getSingleTruck)
  .put(updateTruck)
  .delete(deleteTruck);

router.route("/bulk").post(addBulkTrucks);

module.exports = router;
