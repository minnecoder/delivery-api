import { Request, Response } from "express";
import { CustomerNote } from "../models/CustomerNote";

// @desc Get all customer notes
// @route GET /customernotes
// @access User
export const getCustomerNotes = async (req: Request, res: Response) => {
  try {
    const customernotes = await CustomerNote.findAll();

    return res.status(200).json({
      success: true,
      count: customernotes.length,
      data: customernotes
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Get single customer note
// @route GET /customernotes/:id
// @access User
export const getSingleCustomerNote = async (req: Request, res: Response) => {
  try {
    const customernote = await CustomerNote.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!customernote) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: customernote
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Add customer note
// @route POST /customernotes
// @access User
export const addCustomerNote = async (req: Request, res: Response) => {
  try {
    const customernote = await CustomerNote.create(req.body);

    return res.status(200).json({
      success: true,
      data: customernote
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

export const addBulkCustomerNotes = async (req: Request, res: Response) => {
  try {
    const customernotes = await CustomerNote.bulkCreate(req.body);

    return res.status(200).json({
      success: true,
      count: customernotes.length,
      data: customernotes
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Update customer note
// @route UPDATE /customernotes/:id
// @access User
export const updateCustomerNote = async (req: Request, res: Response) => {
  try {
    const customernote = await CustomerNote.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!customernote) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    await CustomerNote.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: customernote
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Delete customer note
// @route DELETE /customernotes/:id
// @access User
export const deleteCustomerNote = async (req: Request, res: Response) => {
  try {
    const customernote = await CustomerNote.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!customernote) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    await CustomerNote.destroy({
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
