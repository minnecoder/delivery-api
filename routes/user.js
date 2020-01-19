const express = require("express");
const { verifyUser } = require("../controllers/user");

const router = express.Router();

router.route("/").post(verifyUser);

module.exports = router;
