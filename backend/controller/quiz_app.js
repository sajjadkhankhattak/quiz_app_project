import { User, Quiz } from '../models/quiz_app.js';

// SIGNUP - Create new user in MongoDB
export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    
    console.log("✅ SIGNUP - Received:", req.body);

    // Check if user already exists in database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: "User already exists with this email" 
      });
    }

    // Create new user in MongoDB
    const newUser = new User({
      firstName,
      lastName,
      email,
      password  // In production, you should hash this password!
    });

    const savedUser = await newUser.save();
    
    console.log("✅ User saved to database:", savedUser);
    
    res.status(201).json({ 
      success: true,
      message: "Account created successfully!", 
      user: {
        id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email
      }
    });

  } catch (error) {
    console.error("❌ Signup error:", error);
    res.status(500).json({ 
      success: false,
      message: "Internal server error",
      error: error.message 
    });
  }
};

// LOGIN - Authenticate user from MongoDB
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    console.log("✅ LOGIN - Received:", req.body);

    // Find user in database
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ 
        success: false,
        message: "User not found" 
      });
    }

    // Check password (In production, use bcrypt to compare hashed passwords)
    if (user.password !== password) {
      return res.status(400).json({ 
        success: false,
        message: "Invalid password" 
      });
    }

    res.json({ 
      success: true,
      message: "Login successful!",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      },
      token: "dummy-jwt-token" // In production, generate real JWT token
    });

  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ 
      success: false,
      message: "Internal server error",
      error: error.message 
    });
  }
};

// CREATE QUIZ - Save quiz to MongoDB
// CREATE QUIZ
export const createQuiz = async (req, res) => {
  try {
    const { title, description, category, tags, duration, difficulty, questions } = req.body;
    
    console.log("✅ CREATE QUIZ - Received:", req.body);

    // Validate required fields
    if (!title || !category || !questions || questions.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Title, category, and at least one question are required"
      });
    }

    // Create quiz in MongoDB
    const newQuiz = new Quiz({
      title,
      description,
      category,
      tags,
      duration,
      difficulty,
      questions
    });

    const savedQuiz = await newQuiz.save();
    
    res.status(201).json({
      success: true,
      message: "Quiz created successfully!",
      quiz: savedQuiz
    });

  } catch (error) {
    console.error("❌ Create quiz error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create quiz",
      error: error.message
    });
  }
};

// GET ALL QUIZZES
export const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    
    res.json({
      success: true,
      message: "Quizzes fetched successfully!",
      quizzes: quizzes
    });

  } catch (error) {
    console.error("❌ Get quizzes error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch quizzes",
      error: error.message
    });
  }
};
// TEST ENDPOINT - For testing button clicks
export const testQuizEndpoint = async (req, res) => {
  try {
    const { quizId, quizTitle, category, action, timestamp, message } = req.body;
    
    console.log("✅ TEST ENDPOINT - Received data:", req.body);
    
    // Simple response to confirm data was received
    res.json({
      success: true,
      message: "Data received successfully!",
      receivedData: {
        quizId,
        quizTitle,
        category,
        action,
        timestamp,
        message
      },
      serverMessage: "Hello from backend! Your data has been received.",
      status: "Data reached backend successfully!"
    });

  } catch (error) {
    console.error("❌ Test endpoint error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process request",
      error: error.message
    });
  }
};