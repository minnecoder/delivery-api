import express from "express";
// import verify from '../auth/verifyToken');
import {
  getCustomerNotes,
  getSingleCustomerNote,
  addCustomerNote,
  updateCustomerNote,
  deleteCustomerNote
} from "../controllers/customerNotes";

const router = express.Router();

router
  .route("/")
  .get(getCustomerNotes)
  .post(addCustomerNote);

router
  .route("/:id")
  .get(getSingleCustomerNote)
  .put(updateCustomerNote)
  .delete(deleteCustomerNote);

module.exports = router;
