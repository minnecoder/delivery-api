const express = require("express");
const { loginUser, addUser } = require("../controllers/user");

const router = express.Router();

router.route("/add").post(addUser);
router.route("/login").post(loginUser);
module.exports = router;
