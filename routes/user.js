const express = require("express");
const verify = require("../routes/verifyToken");
const { loginUser, addUser } = require("../controllers/user");

const router = express.Router();

router.route("/add").post(verify, addUser);
router.route("/login").post(loginUser);
module.exports = router;
