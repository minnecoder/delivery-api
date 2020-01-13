const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
const app = express();

// Database Connection
connectDB();

// Body Parser
app.use(express.json());

// Enable CORS
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
