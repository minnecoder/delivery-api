const express = require("express");

const {
  getPreviousSigners,
  getSinglePreviousSigner,
  addPreviousSigner,
  updatePreviousSinger,
  deletePreviousSinger
} = require("../controllers/previousSigners");

const router = express.Router();

router
  .route("/")
  .get(getPreviousSigners)
  .post(addPreviousSigner);

router
  .route("/:id")
  .get(getSinglePreviousSigner)
  .put(updatePreviousSinger)
  .delete(deletePreviousSinger);

module.exports = router;
