const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// This maps the function to the URL path
// POST /api/users
router.post('/', registerUser);

// POST /api/users/login
router.post('/login', loginUser);

module.exports = router;