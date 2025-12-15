const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

// 1. Configure Environment Variables
dotenv.config();

// 2. Initialize Express
const app = express();

// 3. Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(cors()); // Allow cross-origin requests

// 4. Database Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

// 5. Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// 6. Error Handling Middleware
// Custom error handler to give us JSON error responses instead of HTML
app.use((err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

// 7. Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});