const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    Register a new user (Student or Instructor)
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { 
    name, 
    email, 
    password, 
    role,
    // Student specific fields
    fatherName, 
    aridNo, 
    semester, 
    section, 
    shift,
    // Instructor specific fields
    department,
    designation
  } = req.body;

  // 1. Basic Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include name, email, and password');
  }

  // 2. Role-specific validation
  if (role === 'student') {
    if (!fatherName || !aridNo || !semester || !section || !shift) {
        res.status(400);
        throw new Error('Please fill in all student details');
    }
  } else if (role === 'instructor') {
    // Validation for Instructor fields shown in your image
    if (!department || !designation) {
        res.status(400);
        throw new Error('Please fill in all instructor details (Department, Designation)');
    }
  }

  // 3. Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // 4. Create user
  const user = await User.create({
    name,
    email,
    password,
    role: role || 'student',
    // Student fields (will be ignored by DB if undefined)
    fatherName,
    aridNo,
    semester,
    section,
    shift,
    // Instructor fields (will be ignored by DB if undefined)
    department,
    designation
  });

  // 5. Send Response
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: null, 
      // Optional: return specific fields based on role for verification
      ...(user.role === 'student' && { aridNo: user.aridNo }),
      ...(user.role === 'instructor' && { designation: user.designation }),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
      res.status(400);
      throw new Error('Please add email and password');
  }

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: null, // Placeholder for JWT
    });
  } else {
    res.status(401); 
    throw new Error('Invalid credentials');
  }
});

module.exports = {
  registerUser,
  loginUser,
};