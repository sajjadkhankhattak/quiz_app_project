import axios from 'axios';

const BASE_URL = "http://localhost:5000";

export const register = async (userData) => {
  return await axios.post(`${BASE_URL}/api/auth/signup`, userData);
}

export const login = async (userData) => {
  return await axios.post(`${BASE_URL}/api/auth/login`, userData);
}

// Add these new functions for quizzes
export const createQuiz = async (quizData) => {
  return await axios.post(`${BASE_URL}/api/quiz`, quizData);
}

export const getQuizzes = async () => {
  return await axios.get(`${BASE_URL}/api/quiz`);
}

export const deleteQuiz = async (id) => {
  return await axios.delete(`${BASE_URL}/api/quiz/${id}`);
}
// Add this to your existing services/api.js
export const sendQuizData = async (quizData) => {
  return await axios.post(`${BASE_URL}/api/quiz/test`, quizData);
}