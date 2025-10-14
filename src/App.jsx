
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import Contact from './pages/contact';
import CreateQuiz from './pages/createQuiz';
import QuizDetails from './pages/quiz-details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/create-quiz' element={<CreateQuiz />} />
                <Route path="/quiz/:id" element={<QuizDetails />} />
                <Route path="/" element={
                    <div>
                        <LandingPage />
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;