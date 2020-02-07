const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { userValidation, loginValidation } = require("../validation");

// @desc Add user
// @route /user/add
// @access Driver, Admin

exports.addUser = async (req, res, next) => {
  // Validate data before adding
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if email is in the database
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email address already exists");

  // Create hashed password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Add new user
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role
  });
  try {
    await user.save();
    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// @desc Login in user
// @route POST /user/login
// @access Driver, Admin

exports.loginUser = async (req, res) => {
  // Validate entered data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  // Check if user exists
  const user = await User.findOne({ userName: req.body.userName });
  if (!user) return res.json({ error: "User name or password is wrong" });

  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: "User name or password is wrong" });

  // Create and assign token
  const token = jwt.sign(
    { _id: user._id, role: user.role },
    process.env.JWT_SECRET
  );
  res.header("Authorization", token).json({ token });
};

// @desc Get single user
// @route POST /user/get/id:
// @access Driver, Admin
exports.getUser = async (req, res) => {
  try {
    const user = await User.find({ userName: req.params.userName }).select(
      "userName email role"
    );

    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
