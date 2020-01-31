const jwt = require("jsonwebtoken");

exports.notesAccess = (req, res, next) => {
  if (req.user.role !== "driver" || "manager" || "admin") {
    res.status(403).send("Driver resource! Access Denied!");
  }
  next();
};

exports.scannerAccess = (req, res, next) => {
  if (req.user.role !== "admin") {
    res.status(403).send("Admin resource! Access Denied!");
  }
  next();
};

exports.dashboardAccess = (req, res, next) => {
  if (req.user.role !== "manager") {
    res.status(403).send("Manager resource! Access Denied");
  }
};

exports.ecommerceAccess = (req, res, next) => {
  if (req.user.role !== "user") {
    res.status(403).send("User resource! Access Denied!");
  }
};
