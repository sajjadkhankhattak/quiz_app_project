import QuizCard from './QuizCard';

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
      image: 'https://images.pexels.com/photos/1645634/pexels-photo-1645634.jpeg?auto=compress&cs=tinysrgb&w=800'
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

  return (
    <div className="container py-5">
      <div className="row">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} {...quiz} />
        ))}
      </div>
    </div>
  );
}
