import express from "express";
import { saveBreak } from "../controllers/scanner";

const router = express.Router();
router.route("/:route/:date").post(saveBreak);

module.exports = router;
