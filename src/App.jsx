
import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
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