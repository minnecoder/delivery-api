import express from 'express'
const dashboard = require("../routes/dashboard");
const user = require("../routes/user");
const orders = require("../routes/orders");
const products = require("../routes/products");
const customers = require("../routes/customers");
const customerHours = require("../routes/customerHours");
const customerNotes = require("../routes/customerNotes");
const orderItems = require("../routes/orderItems.js");
const previousSigners = require("../routes/previousSigners.js");
const drivers = require("../routes/drivers");
const packages = require("../routes/packages");
const stops = require("../routes/stops");
const vehicles = require("../routes/vehicles");
const driverReports = require("../routes/driverReport");
const scanner = require("../routes/scanner");
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./swagger/swagger-compiled.json");

export const routes = express.Router()

routes.use("/api/v1/dashboard", dashboard);
routes.use("/api/v1/user", user);
routes.use("/api/v1/orders", orders);
routes.use("/api/v1/products", products);
routes.use("/api/v1/customers", customers);
routes.use("/api/v1/drivers", drivers);
routes.use("/api/v1/packages", packages);
routes.use("/api/v1/stops", stops);
routes.use("/api/v1/vehicles", vehicles);
routes.use("/api/v1/driverreports", driverReports);
routes.use("/api/v1/scanner", scanner);
routes.use("/api/v1/customerhours", customerHours);
routes.use("/api/v1/customernotes", customerNotes);
routes.use("/api/v1/orderitems", orderItems);
routes.use("/api/v1/previoussigners", previousSigners);
routes.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));