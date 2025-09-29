import './Courses.css';


function Courses() {
   

    const quizCards = [
      {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        alt: "Alexander The Great",
        category: "Figures",
        title: "What Do You Know About Alexander The Great?"
      },
      {
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        alt: "Which Song Matches You?",
        category: "Personality",
        title: "Which Song Matches You?"
      },
      {
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        alt: "World Countries",
        category: "World",
        title: "Where Are These World Countries Located?"
      },
      {
        img: "https://schoolizer.com/img/articles_photos/17063640540.jpg",
        alt: "Science Trivia",
        category: "Science",
        title: "How Much Do You Know About Science?"
      },
      {
        img: "https://static.vecteezy.com/system/resources/thumbnails/013/115/384/small_2x/cartoon-maths-elements-background-education-logo-vector.jpg",
        alt: "Math Quiz",
        category: "Math",
        title: "How Much Do You Know About Science?"
      },
      {
        img: "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
        alt: "Animal Quiz",
        category: "Animal",
        title: "How Much Do You Know About Science?"
      }
    ];

    return (
      <>
        <section className="explore-topics-section">
          <h2 className="explore-topics-title">Explore From Topics</h2>
          <div className="topics-row">
            {['Math','Science','History','Geography','English','Biology','Chemistry','Sports','Movie','Entertainment','Technology','Celebrity','Animal','Relationship','Personality','Television','Music','Country','Art','Game','Book','Food','All Topics'].map(topic => (
              <button key={topic} className="topic-btn">{topic}</button>
            ))}
          </div>
        </section>
        <section className="quiz-card-section">
          <div className="quiz-card-row">
            {quizCards.map((card, idx) => (
              <div className="quiz-card" key={idx}>
                <img src={card.img} alt={card.alt} className="quiz-card-img" />
                <div className="quiz-card-info">
                  <div className="quiz-card-category">{card.category}</div>
                  <div className="quiz-card-title">{card.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="see-more-container">
            <button className="see-more-btn">See More Topics</button>
          </div>
        </section>
      </>
    );
}

export default Courses;