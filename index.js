const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());
app.use(cors());

// Routes
const notes = require("./routes/notes");
const dashboard = require("./routes/dashboard");
const scanner = require("./routes/scanner");

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/notes", notes);
app.use("/dashboard", dashboard);
app.use("/scanner", scanner);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
