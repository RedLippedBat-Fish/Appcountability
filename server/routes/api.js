const express = require('express');
const router = express.Router();

// ------------------ controllers import

const taskController = require('../controllers/taskController');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');

// ------------------ routes to the respective controllers


module.exports = router;
