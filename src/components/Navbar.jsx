import { BookOpen, ChevronDown, Menu, Plus, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            width="90" 
            className="d-inline-block align-text-top" 
            src="/images/image.png" 
            alt="QuizApp Logo"
          />
        </Link>
        
        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <Menu size={24} />
        </button>
        
        {/* Navigation Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center ms-auto">
            {/* Quizzes Dropdown */}
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center text-dark fw-medium px-3 py-2 rounded"
                href="#"
                id="quizzesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BookOpen size={18} className="me-2" />
                Take Quizzes
              </a>
              <ul className="dropdown-menu border-0 shadow-lg p-3" aria-labelledby="quizzesDropdown">
                <div className="row">
                  <div className="col-6">
                    <li><h6 className="dropdown-header text-uppercase small fw-semibold text-muted mb-2">Academic</h6></li>
                    <li><a className="dropdown-item py-2 rounded" href="#math">Math Quizzes</a></li>
                    <li><a className="dropdown-item py-2 rounded" href="#science">Science Quizzes</a></li>
                    <li><a className="dropdown-item py-2 rounded" href="#history">History Quizzes</a></li>
                  </div>
                  <div className="col-6">
                    <li><h6 className="dropdown-header text-uppercase small fw-semibold text-muted mb-2">Popular</h6></li>
                    <li><a className="dropdown-item py-2 rounded" href="#sports">Sports Quizzes</a></li>
                    <li><a className="dropdown-item py-2 rounded" href="#entertainment">Entertainment Quizzes</a></li>
                    <li><a className="dropdown-item py-2 rounded" href="#technology">Technology Quizzes</a></li>
                  </div>
                </div>
                <li><hr className="my-3" /></li>
                <li>
                  <a className="dropdown-item text-primary fw-semibold py-2 rounded" href="#all">
                    Browse All Quizzes →
                  </a>
                </li>
              </ul>
            </li>
            
            {/* Create Quiz Button */}
            <li className="nav-item me-3">
              <button className="btn btn-outline-primary d-flex align-items-center px-3 py-2">
                <Plus size={18} className="me-2" />
                Create Quiz
              </button>
            </li>
            
            {/* Auth Buttons */}
            <li className="nav-item me-2">
              <Link to="/login" className="btn btn-outline-primary d-flex align-items-center px-3 py-2">
                <User size={18} className="me-2" />
                Login
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/signup" className="btn btn-outline-primary d-flex align-items-center px-3 py-2">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}