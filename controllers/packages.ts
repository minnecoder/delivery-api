import { Request, Response } from "express";
import { Package } from "../models/Package";
import { Order } from "../models/Order";
import { Product } from "../models/Product";

// @desc Get all packages
// @route GET /packages
// @access User
export const getPackages = async (req: Request, res: Response) => {
  try {
    const packages = await Package.findAll({
      include: [Order, Product]
    });

    return res.status(200).json({
      success: true,
      count: packages.length,
      data: packages
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single package
// @route GET /packages/:id
// @access User
export const getSinglePackage = async (req: Request, res: Response) => {
  try {
    const packages = await Package.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!packages) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: packages
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add package
// @route POST /packages
// @access User
export const addPackage = async (req: Request, res: Response) => {
  try {
    // Check if orderID is found
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

    // Check if productId is valid
    const product = await Product.findOne({
      where: {
        id: req.body.productId
      }
    });

    if (!product) {
      return res.status(404).json({
        sucess: false,
        error: "The productID was not found"
      });
    }
    const packages = await Package.create(req.body);

    return res.status(200).json({
      success: true,
      data: packages
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update package
// @route UPDATE /packages/:id
// @access User
export const updatePackage = async (req: Request, res: Response) => {
  try {
    const packages = await Package.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!packages) {
      return res.status(404).json({
        success: false,
        error: "package not found"
      });
    }

    await packages.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: packages
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete package
// @route DELETE /packages/:id
// @access User
export const deletePackage = async (req: Request, res: Response) => {
  try {
    const packages = await Package.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!packages) {
      return res.status(404).json({
        success: false,
        error: "Order item not found"
      });
    }

    await packages.destroy({
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
