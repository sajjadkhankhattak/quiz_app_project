import express from 'express';
const router = express.Router();
import { signup, login, createQuiz, getQuizzes, testQuizEndpoint} from '../controller/quiz_app.js';

// Auth routes
router.post('/signup', signup);
router.post('/login', login);

// Quiz routes
router.post('/quiz', createQuiz);
router.get('/quiz', getQuizzes);
// Add this route to your existing routes/quiz_app.js
router.post('/quiz/test', testQuizEndpoint);

export default router;