import { Request, Response } from "express";
import { Stop } from "../models/Stop";
import { Customer } from "../models/Customer";
import { Order } from "../models/Order";
import { Vehicle } from "../models/Vehicle";

// @desc Get all stops
// @route GET /stops
// @access User
export const getStops = async (req: Request, res: Response) => {
  try {
    const stops = await Stop.findAll({
      include: [Customer, Order, Vehicle]
    });

    return res.status(200).json({
      success: true,
      count: stops.length,
      data: stops
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single stop
// @route GET /stops/:id
// @access User
export const getSingleStop = async (req: Request, res: Response) => {
  try {
    const stop = await Stop.findOne({
      where: {
        id: req.params.id
      },
      include: [Customer, Order, Vehicle]
    });

    if (!stop) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: stop
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add stop
// @route POST /stops
// @access User
export const addStop = async (req: Request, res: Response) => {
  try {
    // Check if customerID is found
    const customer = await Customer.findOne({
      where: {
        id: req.body.customerId
      }
    });

    if (!customer) {
      return res.status(404).json({
        sucess: false,
        error: "The customerID was not found"
      });
    }

    const order = await Order.findOne({
      where: {
        id: req.body.orderId
      }
    });

    if (!order) {
      return res.status(404).json({
        sucess: false,
        error: "The orderID was not found"
      });
    }

    const truck = await Vehicle.findOne({
      where: {
        id: req.body.truckId
      }
    });

    if (!truck) {
      return res.status(404).json({
        sucess: false,
        error: "The truckID was not found"
      });
    }

    const stop = await Stop.create(req.body);

    return res.status(200).json({
      success: true,
      data: stop
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

export const updateStop = async (req: Request, res: Response) => {
  try {
    const stop = await Stop.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!stop) {
      return res.status(404).json({
        success: false,
        error: "Delivery Route not found"
      });
    }

    await stop.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: stop
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete deliveryRoute
// @route DELETE /deliveryRoutes/:id
// @access User
export const deleteStop = async (req: Request, res: Response) => {
  try {
    const stop = await Stop.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!stop) {
      return res.status(404).json({
        success: false,
        error: "Delivery Route not found"
      });
    }

    await stop.destroy({
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
