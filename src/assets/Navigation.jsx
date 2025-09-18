import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand">
          <span className="logo-icon">Q</span>
          <span className="logo-text">QuizMaster</span>
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
            <span className="browse-text">Browse Categories</span>
            <span className="leaderboard-text">Leaderboard</span>
            <button className="login-btn">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;