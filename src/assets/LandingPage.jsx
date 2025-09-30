import Navigation from "./Navigation";
import Courses from "./Courses";
import Footer from "./Footer";
import ScoreCard from "./ScoreCard";
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Navigation />

      {/* Main Hero Section */}
      <div className="hero-section custom-hero">
        <div className="custom-hero-content">
          <h1 className="custom-hero-title">
            Take <span className="highlight-orange">Quizzes</span>, Learn &amp; Have Fun! <span className="moon-icon">🌙</span>
          </h1>
          <p className="custom-hero-sub">
            Test your knowledge or <a href="#" className="custom-link">create your own quiz adventure</a>.
          </p>
          <div className="custom-hero-question-row">
            <span className="book-icon">📖</span>
            <span className="question-text">What would you like to learn today?</span>
            <span className="arrow-icon" style={{color:'#1976d2',fontSize:'2em',marginLeft:'8px',transform:'rotate(-25deg)',display:'inline-block'}}>&#10553;</span>
          </div>
          <form className="custom-hero-search">
            <input type="text" placeholder="Search Quizzes.." className="search-input" />
            <button type="submit" className="search-btn">
              <span className="search-icon">&#128269;</span>
            </button>
          </form>
        </div>
      </div>  

      {/* Explore From Topics & Quiz Cards Section (now in Courses) */}
      <Courses />

      {/* Top Scorers Section */}
      <section className="top-scorers">
        <ScoreCard />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default LandingPage;
