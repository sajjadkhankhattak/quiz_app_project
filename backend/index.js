import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import quizRoutes from './routes/quiz_app.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', quizRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: "Server is working! 🎉",
    database: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected"
  });
});

// MongoDB Connection (REPLACE WITH YOUR ACTUAL MONGODB URL)
const MONGODB_URI = "mongodb+srv://sajjadkhan:123@cluster0.zof6ban.mongodb.net/quiz_app?retryWrites=true&w=majority";
// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((error) => {
    console.log('❌ MongoDB connection error:', error.message);
  });

// MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('📊 MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.log('❌ MongoDB connection error:', err);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});