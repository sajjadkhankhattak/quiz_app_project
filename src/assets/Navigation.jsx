import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand">
          <span className="logo-icon">Quiz</span>
          <span className="logo-text">Whizz</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#categories">Categories</a>
            </li>
          </ul>
          <div className="nav-right">
            <div className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="takeQuizDropdown" role="button" tabIndex={0} data-bs-toggle="dropdown" aria-expanded="false">
                Take a Quiz
              </span>
              <ul className="dropdown-menu" aria-labelledby="takeQuizDropdown">
                <li><a className="dropdown-item" href="#quiz-math">Math</a></li>
                <li><a className="dropdown-item" href="#quiz-science">Science</a></li>
                <li><a className="dropdown-item" href="#quiz-history">History</a></li>
                <li><a className="dropdown-item" href="#quiz-sports">Sports</a></li>
                <li><a className="dropdown-item" href="#quiz-technology">Technology</a></li>
                <li><a className="dropdown-item" href="#quiz-art">Art</a></li>
                <li><a className="dropdown-item" href="#quiz-music">Music</a></li>
              </ul>
            </div>
            <span className="leaderboard-text">Leaderboard</span>
            <button className="login-btn">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;