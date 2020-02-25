const express = require('express');
const verify = require('../routes/verifyToken');
const { loginUser, addUser, getUser } = require('../controllers/user');

const router = express.Router();

router.route('/add').post(verify, addUser);
router.route('/login').post(loginUser);
router.route('/:userName').get(getUser);
module.exports = router;
