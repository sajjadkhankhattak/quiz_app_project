import { BookOpen, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <BookOpen className="text-primary me-2" size={32} />
          <div>
            <span style={{ color: '#1e40af', fontWeight: 'bold', fontSize: '24px' }}>Quiz</span>
            <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '-5px' }}>Wizzes</div>
          </div>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="quizzesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Take Quizzes
                <ChevronDown size={16} className="ms-1" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="quizzesDropdown">
                <li><a className="dropdown-item" href="#math">Math Quizzes</a></li>
                <li><a className="dropdown-item" href="#science">Science Quizzes</a></li>
                <li><a className="dropdown-item" href="#history">History Quizzes</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#sports">Sports Quizzes</a></li>
                <li><a className="dropdown-item" href="#entertainment">Entertainment Quizzes</a></li>
                <li><a className="dropdown-item" href="#technology">Technology Quizzes</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item fw-semibold" href="#all">Browse All Quizzes</a></li>
              </ul>
            </li>
            
            <li className="nav-item ms-3">
              <button className="btn btn-primary">Create a Quiz</button>
            </li>
            
            {/* Auth Buttons */}
            <li className="nav-item ms-3">
              <Link to="/login" className="btn btn-outline-primary me-2">
                Login
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </li>
            
            <li className="nav-item ms-3">
              <button className="btn btn-link text-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="5" cy="12" r="1"/>
                  <circle cx="12" cy="12" r="1"/>
                  <circle cx="19" cy="12" r="1"/>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}