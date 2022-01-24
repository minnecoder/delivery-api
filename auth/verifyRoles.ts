// import express, { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// exports.notesCRUAccess = (req: Request, res: Response, next: NextFunction) => {
//   if (req.user.role !== "driver" || "manager" || "admin") {
//     res.status(403).send("You do not have access to this data. Access Denied.");
//   }
//   next();
// };

// exports.notesDeleteAccess = (req: Request, res: Response, next: NextFunction) => {
//   if (req.user.role !== "manager" || "admin") {
//     res.status(403).send("You do not have access to this data. Access Denied.");
//   }
//   next();
// };

// exports.productCUDAccess = (req: Request, res: Response, next: NextFunction) => {
//   if (req.user.role !== "user" || "admin") {
//     res.status(403).send("You do not have access to this data. Access Denied.");
//   }
//   next();
// };

// exports.orderCUDAccess = (req: Request, res: Response, next: NextFunction) => {
//   if (req.user.role !== "user" || "admin") {
//     res.status(403).send("You do not have access to this data. Access Denied.");
//   }
//   next();
// };

// exports.customerCUDAccess = (req: Request, res: Response, next: NextFunction) => {
//   if (req.user.role !== "user" || "manager" || "admin") {
//     res.status(403).send("You do not have access to this data. Access Denied.");
//   }
//   next();
// };
// exports.scannerAccess = (req: Request, res: Response, next: NextFunction) => {
//   if (req.user.role !== "admin") {
//     res.status(403).send("Admin resource! Access Denied!");
//   }
//   next();
// };

// exports.dashboardAccess = (req: Request, res: Response, next: NextFunction) => {
//   if (req.user.role !== "manager") {
//     res.status(403).send("Manager resource! Access Denied");
//   }
//   next();
// };

// exports.ecommerceAccess = (req: Request, res: Response, next: NextFunction) => {
//   if (req.user.role !== "user") {
//     res.status(403).send("User resource! Access Denied!");
//   }
//   next();
// };
