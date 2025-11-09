import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Search, Edit, Save, RotateCcw } from 'lucide-react';

export default function UpdateQuiz() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockQuizzes = [
      { 
        id: 1, 
        title: 'JavaScript Basics', 
        category: 'Programming', 
        description: 'Basic JavaScript concepts quiz',
        questions: [
          { text: 'What is JavaScript?', options: ['Language', 'Framework', 'Library', 'Tool'], correctAnswer: 0 }
        ]
      },
      { 
        id: 2, 
        title: 'React Fundamentals', 
        category: 'Web Development', 
        description: 'React.js basic concepts',
        questions: [
          { text: 'What is React?', options: ['Library', 'Framework', 'Language', 'Database'], correctAnswer: 0 }
        ]
      },
    ];
    setQuizzes(mockQuizzes);
  }, []);

  const filteredQuizzes = quizzes.filter(quiz =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
    setValue('title', quiz.title);
    setValue('category', quiz.category);
    setValue('description', quiz.description);
  };

  const onSubmit = (data) => {
    if (!selectedQuiz) {
      alert('Please select a quiz to update');
      return;
    }
    
    const updatedQuiz = {
      ...selectedQuiz,
      ...data
    };
    
    console.log('Updated Quiz:', updatedQuiz);
    alert('Quiz updated successfully!');
    
    // Update in local state (replace with API call)
    setQuizzes(quizzes.map(q => q.id === selectedQuiz.id ? updatedQuiz : q));
    reset();
    setSelectedQuiz(null);
  };

  const handleReset = () => {
    reset();
    setSelectedQuiz(null);
  };

  return (
    <div>
      <h2 className="mb-4">Update Quiz</h2>

      <div className="row">
        {/* Quiz Selection */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Select Quiz</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <Search size={18} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search quizzes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="list-group">
                {filteredQuizzes.map(quiz => (
                  <button
                    key={quiz.id}
                    type="button"
                    className={`list-group-item list-group-item-action ${
                      selectedQuiz?.id === quiz.id ? 'active' : ''
                    }`}
                    onClick={() => handleQuizSelect(quiz)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{quiz.title}</span>
                      <Edit size={16} />
                    </div>
                    <small className="text-muted">{quiz.category}</small>
                  </button>
                ))}
              </div>

              {filteredQuizzes.length === 0 && (
                <div className="text-center py-3">
                  <p className="text-muted">No quizzes found</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Update Form */}
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">
                {selectedQuiz ? `Update: ${selectedQuiz.title}` : 'Quiz Details'}
              </h5>
            </div>
            <div className="card-body">
              {selectedQuiz ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Quiz Title *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.title && 'is-invalid'}`}
                          {...register('title', { required: 'Quiz title is required' })}
                        />
                        {errors.title && (
                          <div className="invalid-feedback">{errors.title.message}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Category *</label>
                        <select
                          className={`form-control ${errors.category && 'is-invalid'}`}
                          {...register('category', { required: 'Category is required' })}
                        >
                          <option value="">Select Category</option>
                          <option value="Programming">Programming</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Science">Science</option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="General Knowledge">General Knowledge</option>
                        </select>
                        {errors.category && (
                          <div className="invalid-feedback">{errors.category.message}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      {...register('description')}
                    />
                  </div>

                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-success">
                      <Save size={18} className="me-2" />
                      Update Quiz
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={handleReset}>
                      <RotateCcw size={18} className="me-2" />
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-4">
                  <p className="text-muted">Please select a quiz to update</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}