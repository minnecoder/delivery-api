import express from "express";
// import verify from "../auth/verifyToken";
import { loginUser, addUser, getUser } from "../controllers/user";

const router = express.Router();

// router.route('/add').post(verify, addUser);
router.route("/add").post(addUser);
router.route("/login").post(loginUser);
router.route("/:userName").get(getUser);
module.exports = router;
