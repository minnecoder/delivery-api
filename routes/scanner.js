const express = require("express");
const { saveBreak } = require("../controllers/scanner");

const router = express.Router();
router.route("/:route/:date").post(saveBreak);

module.exports = router;
