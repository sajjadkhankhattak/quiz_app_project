import { Settings, Menu, Plus, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isCreateQuizPage = location.pathname === '/create-quiz';
  const isAdminPage = location.pathname === '/admin';

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
            {/* Admin Portal Button - Hidden on admin page */}
            {!isAdminPage && (
              <li className="nav-item me-3">
                <button 
                  onClick={() => navigate('/admin')} 
                  className="btn btn-outline-primary d-flex align-items-center px-3 py-2"
                >
                  <Settings size={18} className="me-2" />
                  Admin Portal
                </button>
              </li>
            )}

            {/* Back to Site Button - Only show on admin page */}
            {isAdminPage && (
              <li className="nav-item me-3">
                <button 
                  onClick={() => navigate('/')} 
                  className="btn btn-outline-primary d-flex align-items-center px-3 py-2"
                >
                  ← Back to Site
                </button>
              </li>
            )}

            {/* Create Quiz Button - Hidden on create-quiz and admin pages */}
            {!isCreateQuizPage && !isAdminPage && (
              <li className="nav-item me-3">
                <button 
                  onClick={() => navigate('/create-quiz')} 
                  className="btn btn-outline-primary d-flex align-items-center px-3 py-2"
                >
                  <Plus size={18} className="me-2" />
                  Create Quiz
                </button>
              </li>
            )}

            {/* Auth Buttons - Hidden on admin page */}
            {!isAdminPage && (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}