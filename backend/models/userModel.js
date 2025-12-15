const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    role: {
      type: String,
      enum: ['student', 'instructor', 'admin'],
      default: 'student',
    },

    // --- Student Specific Fields ---
    fatherName: {
      type: String,
      required: false, // Validated in Controller
    },
    aridNo: {
      type: String,
      required: false,
    },
    semester: {
      type: String,
      required: false,
    },
    section: {
      type: String,
      required: false,
    },
    shift: {
      type: String,
      // You can add more options here if needed
      enum: ['Morning', 'Evening', 'Weekend', ''], 
      required: false,
    },

    // --- Instructor Specific Fields ---
    department: {
      type: String,
      required: false, // Validated in Controller
    },
    designation: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Encrypt password using bcrypt before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);