const express = require("express");

const {
  getPreviousSigners,
  getSinglePreviousSigner,
  addPreviousSigner,
  updatePreviousSigner,
  deletePreviousSigner
} = require("../controllers/previousSigners");

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
