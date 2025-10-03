import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuizGrid from './components/QuizGrid';
import TopScorers from './components/TopScorers';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={
                    <div>
                        <Navbar />
                        <Hero />
                        <QuizGrid />
                        <TopScorers />
                        <Footer />
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;