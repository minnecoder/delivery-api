const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();

dotenv.config({ path: "./config/config.env" });
app.use(bodyParser.json());

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
const user = require("./routes/user");

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/notes", notes);
app.use("/dashboard", dashboard);
app.use("/scanner", scanner);
app.use("/user", user);
app.use("/orders", orders);
app.use("/products", products);
app.use("/customers", customers);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
