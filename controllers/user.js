const bcrypt = require("bcryptjs");

const User = require("../models/User");

// @desc Add user
// @route /user/add
// @access Admin

// exports.addUser = async (req, res, next) => {
//   try {
//     // Check if user already exists
//     const user = await User.create(req.body);

//     return res.status(200).json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server Error" });
//   }
// };

// @desc Verify entered user and password
// @route POST /user
// @access Public

exports.verifyUser = async (req, res, next) => {
  const isValid = await User.findOne(
    { userNames: req.body.userNames },
    (err, obj) => {
      console.log(obj);
      if (err) return err;
    }
  );

  //   console.log(req.body.userName);
};
