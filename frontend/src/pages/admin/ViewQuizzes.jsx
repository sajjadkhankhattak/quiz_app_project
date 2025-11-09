import { useState, useEffect } from 'react';
import { Eye, Search, Filter, Download } from 'lucide-react';

export default function ViewQuizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockQuizzes = [
      { id: 1, title: 'JavaScript Basics', category: 'Programming', questions: 10, created: '2024-01-15', status: 'Active' },
      { id: 2, title: 'React Fundamentals', category: 'Web Development', questions: 15, created: '2024-01-10', status: 'Active' },
      { id: 3, title: 'CSS Advanced', category: 'Web Development', questions: 8, created: '2024-01-05', status: 'Inactive' },
      { id: 4, title: 'Node.js Quiz', category: 'Backend', questions: 12, created: '2024-01-01', status: 'Active' },
    ];
    setQuizzes(mockQuizzes);
  }, []);

  const filteredQuizzes = quizzes.filter(quiz =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'all' || quiz.category === filterCategory)
  );

  const categories = ['all', ...new Set(quizzes.map(quiz => quiz.category))];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>View Quizzes</h2>
        <button className="btn btn-outline-primary d-flex align-items-center">
          <Download size={18} className="me-2" />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-6">
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
        <div className="col-md-3">
          <select
            className="form-select"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quizzes Table */}
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
                  <th>Status</th>
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
                      <span className={`badge ${quiz.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                        {quiz.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">
                        <Eye size={16} />
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
    </div>
  );
}