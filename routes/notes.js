const express = require("express");
const { getNotes, getSingleNote } = require("../controllers/notes");

const router = express.Router();

router.route("/").get(getNotes);
router.route("/:id").get(getSingleNote);
module.exports = router;
