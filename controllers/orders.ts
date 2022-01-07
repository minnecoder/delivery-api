import { Request, Response } from "express";
import { Order } from "../models/Order";
import { Customer } from "../models/Customer";
// const verify = require('../auth/verifyToken');

// @desc Get all orders
// @route GET /orders
// @access User
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.findAll({
      include: Customer
    });
    return res.status(200).json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single order
// @route GET /orders/:id
// @access User
export const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id
      },
      include: Customer
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add order
// @route POST /orders
// @access User
export const addOrder = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    // Check if customer ID is found
    const customer = await Customer.findOne({
      where: {
        id: req.body.customer_id
      }
    });

    if (!customer) {
      return res.status(404).json({
        sucess: false,
        error: "The customer ID was not found"
      });
    }
    const order = await Order.create(req.body);

    return res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update order
// @route UPDATE /orders/:id
// @access User
export const updateOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        error: "Order not found"
      });
    }

    await Order.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete order
// @route DELETE /orders/:id
// @access User
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        error: "Order not found"
      });
    }

    await Order.destroy({
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
