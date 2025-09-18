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
      <div className="hero-section">
        <div className="hero-content">
          <h2>Test Your Knowledge.<br />Challenge Your Friends.</h2>
          <div className="hero-buttons">
            <button className="start-quiz">Start Quiz</button>
            <button className="how-it-works">How It Works</button>
          </div>
        </div>
      </div>

      {/* Featured Quizzes Section */}
      <section className="featured-quizzes">
        <h3>Featured Quizzes</h3>
        <div className="quiz-categories">
          <Courses />
        </div>
      </section>

      {/* Top Scorers Section */}
      <section className="top-scorers">
        <h3>Top Scorers</h3>
        <ScoreCard />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default LandingPage;
