import express from "express";

import {
  getPreviousSigners,
  getSinglePreviousSigner,
  addPreviousSigner,
  updatePreviousSigner,
  deletePreviousSigner
} from "../controllers/previousSigners";

const router = express.Router();

router
  .route("/")
  .get(getPreviousSigners)
  .post(addPreviousSigner);

router
  .route("/:id")
  .get(getSinglePreviousSigner)
  .put(updatePreviousSigner)
  .delete(deletePreviousSigner);

module.exports = router;
