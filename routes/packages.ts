import express from "express";
// import verify from '../auth/verifyToken');
import {
  getPackages,
  getSinglePackage,
  addPackage,
  updatePackage,
  deletePackage
} from "../controllers/packages";

const router = express.Router();

router
  .route("/")
  .get(getPackages)
  .post(addPackage);

router
  .route("/:id")
  .get(getSinglePackage)
  .put(updatePackage)
  .delete(deletePackage);

module.exports = router;
