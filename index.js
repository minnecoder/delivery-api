const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./swagger-compiled.json");

const app = express();

app.use(cors());
dotenv.config({ path: "./config/config.env" });
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Connection and Test
const db = require("./config/postgres-db");

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(error => {
    console.log("Error: ", error);
  });

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// Routes
const dashboard = require("./routes/dashboard");
const user = require("./routes/user");
const orders = require("./routes/orders");
const products = require("./routes/products");
const customers = require("./routes/customers");
const customerHours = require("./routes/customerHours");
const customerNotes = require("./routes/customerNotes");

const orderItems = require("./routes/orderItems.js");
const previousSigners = require("./routes/previousSigners.js");
const drivers = require("./routes/drivers");
const packages = require("./routes/packages");
const stops = require("./routes/stops");
const vehicles = require("./routes/vehicles");
const driverReports = require("./routes/driverReport");
const scanner = require("./routes/scanner");

app.use("/api/v1/dashboard", dashboard);
app.use("/api/v1/user", user);
app.use("/api/v1/orders", orders);
app.use("/api/v1/products", products);
app.use("/api/v1/customers", customers);
app.use("/api/v1/drivers", drivers);
app.use("/api/v1/packages", packages);
app.use("/api/v1/stops", stops);
app.use("/api/v1/vehicles", vehicles);
app.use("/api/v1/driverreports", driverReports);
app.use("/api/v1/scanner", scanner);
app.use("/api/v1/customerhours", customerHours);
app.use("/api/v1/customernotes", customerNotes);
app.use("/api/v1/orderitems", orderItems);
app.use("/api/v1/previoussigners", previousSigners);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
