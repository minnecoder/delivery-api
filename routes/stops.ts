import express from "express";
// import verify from '../auth/verifyToken');
import {
  getStops,
  getSingleStop,
  addStop,
  updateStop,
  deleteStop
} from "../controllers/stops";

const router = express.Router();

router
  .route("/")
  .get(getStops)
  .post(addStop);

router
  .route("/:id")
  .get(getSingleStop)
  .put(updateStop)
  .delete(deleteStop);

module.exports = router;
