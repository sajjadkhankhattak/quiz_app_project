import QuizCard from './QuizCard';

// QuizGrid Component
export default function QuizGrid() {
  const quizzes = [
    {
      category: 'Mahatma Gandhi',
      title: 'A Quiz To Test Your Knowledge About Mahatma Gandhi!',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      category: 'Friendship',
      title: 'Best Friend Quiz: Are You Really Best Friends?',
      image: 'https://www.bing.com/th/id/OIP.t-bx7HdzFFzb29ZB_5JN8wHaE7?w=244&h=211&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.5&pid=3.1&rm=2'
    },
    {
      category: 'NFL',
      title: 'Name All NFL Teams Quiz: How Many Can You Identify?',
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      category: 'European History',
      title: 'Can You Pass The History Of Europe Quiz?',
      image: 'https://images.pexels.com/photos/4429286/pexels-photo-4429286.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      category: 'Movie',
      title: 'Guess The Famous Movie Quotes In This Quiz',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      category: 'Football',
      title: 'Football Quiz Only True Fans Can Beat',
      image: 'https://images.pexels.com/photos/209954/pexels-photo-209954.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'History', 'Sports', 'Entertainment', 'Trivia',
    'Science', 'Geography', 'Math', 'Literature', 'Art',
    'Technology', 'Music', 'Movies', 'Politics', 'Nature',
    'Health', 'Business', 'Education', 'Culture', 'Food',
    'Travel', 'Languages', 'Philosophy', 'Religion'
  ];

  return (
    <div className="container py-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark mb-3">Popular Quizzes</h2>
        <p className="text-muted mb-4">Test your knowledge with our curated collection of quizzes</p>

        {/* Filter Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {categories.map((tab) => (
            <button
              key={tab}
              className={`btn ${tab === 'All' ? 'btn-secondary' : 'btn-outline-secondary'} btn-sm px-3`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="row">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} {...quiz} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-5">
        <button className="btn btn-outline-primary px-4 py-2">
          Load More Quizzes
        </button>
      </div>
    </div>
  );
}