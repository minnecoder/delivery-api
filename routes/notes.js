const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This will return all notes");
});

router.get("/:id", (req, res) => {
  res.send("This will return notes for a single route");
});

module.exports = router;
