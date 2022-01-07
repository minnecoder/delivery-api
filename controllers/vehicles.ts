import { Request, Response } from "express";
import { Vehicle } from "../models/Vehicle";

// @desc Get all vehicles
// @route GET /vehicles
// @access User
export const getVehicles = async (req: Request, res: Response) => {
  try {
    const vehicles = await Vehicle.findAll();

    return res.status(200).json({
      success: true,
      count: vehicles.length,
      data: vehicles
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single vehicle
// @route GET /vehicles/:id
// @access User
export const getSingleVehicle = async (req: Request, res: Response) => {
  try {
    const vehicle = await Vehicle.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: vehicle
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add vehicle
// @route POST /vehicles
// @access User
export const addVehicle = async (req: Request, res: Response) => {
  try {
    const vehicle = await Vehicle.create(req.body);

    return res.status(200).json({
      success: true,
      data: vehicle
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

export const addBulkVehicles = async (req: Request, res: Response) => {
  try {
    const vehicles = await Vehicle.bulkCreate(req.body);

    return res.status(200).json({
      success: true,
      count: vehicles.length,
      data: vehicles
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update vehicle
// @route UPDATE /vehicles/:id
// @access User
export const updateVehicle = async (req: Request, res: Response) => {
  try {
    const vehicle = await Vehicle.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: "Vehicle not found"
      });
    }

    await Vehicle.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: vehicle
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete vehicle
// @route DELETE /vehicles/:id
// @access User
export const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const vehicle = await Vehicle.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: "Vehicle not found"
      });
    }

    await Vehicle.destroy({
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
