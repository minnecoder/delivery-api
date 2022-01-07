import { Request, Response } from "express";
import { DriverReport } from "../models/DriverReport";
import { Driver } from "../models/Driver";
import { Vehicle } from "../models/Vehicle";

// @desc Get all driver reports
// @route GET /driverreports
// @access User
export const getDriverReports = async (req: Request, res: Response) => {
  try {
    const driverReports = await DriverReport.findAll();

    return res.status(200).json({
      success: true,
      count: driverReports.length,
      data: driverReports
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single driver report
// @route GET /driverreports/:id
// @access User
export const getSingleDriverReport = async (req: Request, res: Response) => {
  try {
    const driverReport = await DriverReport.findOne({
      where: {
        id: req.params.id
      },
      include: Driver,
      Vehicle
    });

    if (!driverReport) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: driverReport
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add driverReport
// @route POST /driverReports
// @access User
export const addDriverReport = async (req: Request, res: Response) => {
  try {
    // Check if driverId is valid
    const driver = await Driver.findOne({
      where: {
        id: req.body.driverId
      }
    });

    if (!driver) {
      return res.status(404).json({
        success: false,
        error: "The driver ID was not found"
      });
    }

    // Check if vehicle_id is valid
    const vehicle = await Vehicle.findOne({
      where: {
        id: req.body.truckId
      }
    });

    if (!vehicle) {
      res.status(404).json({
        success: false,
        error: "The truck ID was not found"
      });
    }

    const driverReport = await DriverReport.create(req.body);

    return res.status(200).json({
      success: true,
      data: driverReport
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update driver report
// @route UPDATE /driverreports/:id
// @access User
export const updateDriverReport = async (req: Request, res: Response) => {
  try {
    const driverReport = await DriverReport.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!driverReport) {
      return res.status(404).json({
        success: false,
        error: "Driver report not found"
      });
    }

    await driverReport.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: driverReport
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete driver report
// @route DELETE /driverreports/:id
// @access User
export const deleteDriverReport = async (req: Request, res: Response) => {
  try {
    const driverReport = await DriverReport.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!driverReport) {
      return res.status(404).json({
        success: false,
        error: "Driver report not found"
      });
    }

    await driverReport.destroy({
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Sync Update driver report
// @route UPDATE /driverreports/update
// @access User
export const updateDR = async (req: Request, res: Response) => {
  try {
    const driverReport = await DriverReport.findOne({
      where: {
        routeId: req.body.route,
        date: req.body.date
      }
    });

    if (!driverReport) {
      return res.status(404).json({
        success: false,
        error: "Driver Report not found"
      });
    }

    DriverReport.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: driverReport
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};
