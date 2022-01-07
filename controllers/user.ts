import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

// @desc Add user
// @route /user/add
// @access Driver, Admin

export const addUser = async (req: Request, res: Response) => {
  // Check if email is already used
  const emailExists = await User.findOne({ where: { email: req.body.email } });
  if (emailExists) return res.status(400).send("Email address already exists");

  // Check if user name is already used
  const userExists = await User.findOne({ where: { user_name: req.body.user_name } });
  if (userExists) return res.status(400).send("User name already exists");

  // Create hashed password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Add new user

  try {
    const user = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role
    });
    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Login in user
// @route POST /user/login
// @access Driver, Admin
export const loginUser = async (req: Request, res: Response) => {
  // Check if user exists
  const user = await User.findOne({ where: { user_name: req.body.user_name } });
  if (!user) return res.status(400).json({ error: "User name or password is wrong" });

  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: "User name or password is wrong" });
  }

  // Create and assign token
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
  return res.header("Authorization", token).json({ token });
};

// @desc Get single user
// @route POST /user/get/id:
// @access Driver, Admin
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ where: { userName: req.params.userName } }).select(
      "-password"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "customer note not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};
