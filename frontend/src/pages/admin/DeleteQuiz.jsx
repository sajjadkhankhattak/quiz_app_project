import { useState, useEffect } from 'react';
import { Search, Trash2, AlertTriangle, X, Check } from 'lucide-react';

export default function DeleteQuiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [quizToDelete, setQuizToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockQuizzes = [
      { id: 1, title: 'JavaScript Basics', category: 'Programming', questions: 10, created: '2024-01-15' },
      { id: 2, title: 'React Fundamentals', category: 'Web Development', questions: 15, created: '2024-01-10' },
      { id: 3, title: 'CSS Advanced', category: 'Web Development', questions: 8, created: '2024-01-05' },
      { id: 4, title: 'Node.js Quiz', category: 'Backend', questions: 12, created: '2024-01-01' },
    ];
    setQuizzes(mockQuizzes);
  }, []);

  const filteredQuizzes = quizzes.filter(quiz =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (quiz) => {
    setQuizToDelete(quiz);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (quizToDelete) {
      // Remove from local state (replace with API call)
      setQuizzes(quizzes.filter(q => q.id !== quizToDelete.id));
      setShowDeleteModal(false);
      setQuizToDelete(null);
      alert('Quiz deleted successfully!');
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setQuizToDelete(null);
  };

  return (
    <div>
      <h2 className="mb-4">Delete Quiz</h2>

      <div className="alert alert-warning">
        <AlertTriangle size={18} className="me-2" />
        <strong>Warning:</strong> Deleting a quiz is permanent and cannot be undone.
      </div>

      {/* Search */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text">
              <Search size={18} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search quizzes to delete..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Quizzes List */}
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Questions</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuizzes.map(quiz => (
                  <tr key={quiz.id}>
                    <td>{quiz.title}</td>
                    <td>
                      <span className="badge bg-secondary">{quiz.category}</span>
                    </td>
                    <td>{quiz.questions}</td>
                    <td>{quiz.created}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteClick(quiz)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredQuizzes.length === 0 && (
            <div className="text-center py-4">
              <p className="text-muted">No quizzes found</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && quizToDelete && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">
                  <AlertTriangle size={20} className="me-2" />
                  Confirm Deletion
                </h5>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete the following quiz?</p>
                <div className="alert alert-danger">
                  <strong>{quizToDelete.title}</strong><br />
                  <small>Category: {quizToDelete.category}</small><br />
                  <small>Questions: {quizToDelete.questions}</small>
                </div>
                <p className="text-danger">
                  <strong>This action cannot be undone!</strong>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={cancelDelete}
                >
                  <X size={18} className="me-2" />
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  <Check size={18} className="me-2" />
                  Delete Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}