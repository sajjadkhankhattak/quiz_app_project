import { useState } from 'react';
import { 
  BarChart3, Users, FileText, Plus, Trash2, 
  Search, Settings, PlayCircle, Clock,
  CheckCircle, XCircle, Award, Target, Edit
} from 'lucide-react';

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const [quizzes, setQuizzes] = useState([
    {
      id: 1, 
      title: 'Python Programming Basics', 
      category: 'Technology',
      author: 'John Doe', 
      created: '2024-01-15', 
      attempts: 1247,
      averageScore: 68, 
      status: 'published', 
      questions: 15,
      duration: 30,
      difficulty: 'medium'
    },
    {
      id: 2, 
      title: 'World History', 
      category: 'History',
      author: 'Sarah Wilson', 
      created: '2024-01-14', 
      attempts: 892,
      averageScore: 74, 
      status: 'published', 
      questions: 20,
      duration: 45,
      difficulty: 'medium'
    }
  ]);

  const [users, setUsers] = useState([
    {
      id: 1, 
      name: 'Alice Johnson', 
      email: 'alice@example.com', 
      role: 'user',
      joined: '2024-01-10', 
      quizzesTaken: 15, 
      averageScore: 78, 
      status: 'active',
      lastActive: '2024-01-16'
    },
    {
      id: 2, 
      name: 'Bob Smith', 
      email: 'bob@example.com', 
      role: 'user',
      joined: '2024-01-09', 
      quizzesTaken: 8, 
      averageScore: 65, 
      status: 'active',
      lastActive: '2024-01-15'
    }
  ]);

  // Dashboard Stats
  const dashboardStats = {
    totalQuizzes: quizzes.length,
    totalUsers: users.length,
    totalAttempts: quizzes.reduce((sum, quiz) => sum + quiz.attempts, 0),
    averageScore: quizzes.reduce((sum, quiz) => sum + quiz.averageScore, 0) / quizzes.length,
    activeToday: 234,
    newRegistrations: 12
  };

  // Filter functions
  const filteredQuizzes = quizzes.filter(quiz =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quiz.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Quiz CRUD Operations
  const handleAddQuiz = (newQuiz) => {
    const quiz = {
      ...newQuiz,
      id: Math.max(...quizzes.map(q => q.id), 0) + 1,
      created: new Date().toISOString().split('T')[0],
      attempts: 0,
      averageScore: 0,
      author: 'Admin'
    };
    setQuizzes(prev => [...prev, quiz]);
  };

  const handleUpdateQuiz = (id, updatedQuiz) => {
    setQuizzes(prev => prev.map(quiz => 
      quiz.id === id ? { ...quiz, ...updatedQuiz } : quiz
    ));
  };

  const handleDeleteQuiz = (id) => {
    setQuizzes(prev => prev.filter(quiz => quiz.id !== id));
  };

  const handlePublishQuiz = (id) => {
    setQuizzes(prev => prev.map(quiz => 
      quiz.id === id ? { ...quiz, status: 'published' } : quiz
    ));
  };

  // User CRUD Operations
  const handleAddUser = (newUser) => {
    const user = {
      ...newUser,
      id: Math.max(...users.map(u => u.id), 0) + 1,
      joined: new Date().toISOString().split('T')[0],
      quizzesTaken: 0,
      averageScore: 0,
      lastActive: new Date().toISOString().split('T')[0]
    };
    setUsers(prev => [...prev, user]);
  };

  const handleUpdateUser = (id, updatedUser) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...updatedUser } : user
    ));
  };

  const handleDeleteUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const handleToggleUserStatus = (id) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { 
        ...user, 
        status: user.status === 'active' ? 'inactive' : 'active' 
      } : user
    ));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-dark text-white vh-100 position-fixed">
          <div className="sidebar-sticky pt-4">
            <div className="text-center mb-4">
              <h4 className="fw-bold text-primary">QuizWhizz Portal</h4>
              <small className="text-muted">Control Panel</small>
            </div> 
            
            <nav className="nav flex-column">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                { id: 'quizzes', label: 'Quizzes', icon: FileText },
                { id: 'users', label: 'Users', icon: Users },
                { id: 'settings', label: 'Settings', icon: Settings }
              ].map(item => (
                <button
                  key={item.id}
                  className={`nav-link text-start text-white d-flex align-items-center ${
                    activeTab === item.id ? 'bg-primary' : ''
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon size={18} className="me-2" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 ms-auto">
          <div className="p-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="fw-bold text-dark mb-1">
                  {activeTab === 'dashboard' && 'Dashboard'}
                  {activeTab === 'quizzes' && 'Quiz Management'}
                  {activeTab === 'users' && 'User Management'}
                  {activeTab === 'settings' && 'Settings'}
                </h2>
              </div>
            </div>

            {/* Dashboard */}
            {activeTab === 'dashboard' && (
              <div>
                <div className="row mb-4">
                  {[
                    { title: 'Total Quizzes', value: dashboardStats.totalQuizzes, icon: FileText, color: 'primary' },
                    { title: 'Registered Users', value: dashboardStats.totalUsers, icon: Users, color: 'success' },
                    { title: 'Quiz Attempts', value: dashboardStats.totalAttempts, icon: PlayCircle, color: 'warning' },
                    { title: 'Average Score', value: `${dashboardStats.averageScore}%`, icon: Target, color: 'info' },
                  ].map(stat => (
                    <div key={stat.title} className="col-md-3 mb-3">
                      <div className={`card border-0 bg-${stat.color} bg-opacity-10 h-100`}>
                        <div className="card-body text-center">
                          <stat.icon size={24} className={`text-${stat.color} mb-2`} />
                          <h3 className="fw-bold text-dark">{stat.value}</h3>
                          <div className="text-muted small">{stat.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quiz Management */}
            {activeTab === 'quizzes' && (
              <QuizManagement 
                quizzes={filteredQuizzes}
                onAddQuiz={handleAddQuiz}
                onUpdateQuiz={handleUpdateQuiz}
                onDeleteQuiz={handleDeleteQuiz}
                onPublishQuiz={handlePublishQuiz}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            )}

            {/* User Management */}
            {activeTab === 'users' && (
              <UserManagement 
                users={filteredUsers}
                onAddUser={handleAddUser}
                onUpdateUser={handleUpdateUser}
                onDeleteUser={handleDeleteUser}
                onToggleUserStatus={handleToggleUserStatus}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            )}

            {/* Settings */}
            {activeTab === 'settings' && (
              <SettingsPanel />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Quiz Management Component
const QuizManagement = ({ quizzes, onAddQuiz, onUpdateQuiz, onDeleteQuiz, onPublishQuiz, searchTerm, onSearchChange }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingQuiz, setEditingQuiz] = useState(null);
  const [newQuiz, setNewQuiz] = useState({
    title: '',
    category: 'Technology',
    duration: 30,
    difficulty: 'medium',
    questions: 10
  });

  const handleAddQuiz = () => {
    if (newQuiz.title.trim()) {
      onAddQuiz(newQuiz);
      setNewQuiz({ title: '', category: 'Technology', duration: 30, difficulty: 'medium', questions: 10 });
      setShowAddModal(false);
    }
  };

  const handleEditQuiz = (quiz) => {
    setEditingQuiz(quiz);
    setShowEditModal(true);
  };

  const handleUpdateQuiz = () => {
    if (editingQuiz && editingQuiz.title.trim()) {
      onUpdateQuiz(editingQuiz.id, {
        title: editingQuiz.title,
        category: editingQuiz.category,
        duration: editingQuiz.duration,
        difficulty: editingQuiz.difficulty,
        questions: editingQuiz.questions
      });
      setShowEditModal(false);
      setEditingQuiz(null);
    }
  };

  return (
    <div>
      {/* Search and Add Bar */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <Search size={16} />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search quizzes..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4 text-end">
              <button 
                className="btn btn-primary"
                onClick={() => setShowAddModal(true)}
              >
                <Plus size={16} className="me-2" />
                Add Quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quizzes Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Questions</th>
                  <th>Duration</th>
                  <th>Difficulty</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {quizzes.map(quiz => (
                  <tr key={quiz.id}>
                    <td className="fw-semibold">{quiz.title}</td>
                    <td>{quiz.category}</td>
                    <td>{quiz.questions}</td>
                    <td>{quiz.duration}m</td>
                    <td>
                      <span className={`badge ${
                        quiz.difficulty === 'easy' ? 'bg-success' : 
                        quiz.difficulty === 'medium' ? 'bg-warning' : 'bg-danger'
                      }`}>
                        {quiz.difficulty}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${
                        quiz.status === 'published' ? 'bg-success' : 'bg-warning'
                      }`}>
                        {quiz.status}
                      </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button 
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleEditQuiz(quiz)}
                        >
                          <Edit size={14} />
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-success"
                          onClick={() => onPublishQuiz(quiz.id)}
                          disabled={quiz.status === 'published'}
                        >
                          <CheckCircle size={14} />
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => onDeleteQuiz(quiz.id)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Quiz Modal */}
      {showAddModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Quiz</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Quiz Title</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={newQuiz.title}
                    onChange={(e) => setNewQuiz({...newQuiz, title: e.target.value})}
                    placeholder="Enter quiz title"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select 
                    className="form-select"
                    value={newQuiz.category}
                    onChange={(e) => setNewQuiz({...newQuiz, category: e.target.value})}
                  >
                    <option value="Technology">Technology</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Mathematics">Mathematics</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Number of Questions</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={newQuiz.questions}
                    onChange={(e) => setNewQuiz({...newQuiz, questions: parseInt(e.target.value)})}
                    min="1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Duration (minutes)</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={newQuiz.duration}
                    onChange={(e) => setNewQuiz({...newQuiz, duration: parseInt(e.target.value)})}
                    min="1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Difficulty</label>
                  <select 
                    className="form-select"
                    value={newQuiz.difficulty}
                    onChange={(e) => setNewQuiz({...newQuiz, difficulty: e.target.value})}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleAddQuiz}>
                  Add Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Quiz Modal */}
      {showEditModal && editingQuiz && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Quiz</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Quiz Title</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={editingQuiz.title}
                    onChange={(e) => setEditingQuiz({...editingQuiz, title: e.target.value})}
                    placeholder="Enter quiz title"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select 
                    className="form-select"
                    value={editingQuiz.category}
                    onChange={(e) => setEditingQuiz({...editingQuiz, category: e.target.value})}
                  >
                    <option value="Technology">Technology</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                    <option value="Mathematics">Mathematics</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Number of Questions</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={editingQuiz.questions}
                    onChange={(e) => setEditingQuiz({...editingQuiz, questions: parseInt(e.target.value)})}
                    min="1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Duration (minutes)</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={editingQuiz.duration}
                    onChange={(e) => setEditingQuiz({...editingQuiz, duration: parseInt(e.target.value)})}
                    min="1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Difficulty</label>
                  <select 
                    className="form-select"
                    value={editingQuiz.difficulty}
                    onChange={(e) => setEditingQuiz({...editingQuiz, difficulty: e.target.value})}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleUpdateQuiz}>
                  Update Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// User Management Component
const UserManagement = ({ users, onAddUser, onUpdateUser, onDeleteUser, onToggleUserStatus, searchTerm, onSearchChange }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'user'
  });

  const handleAddUser = () => {
    if (newUser.name.trim() && newUser.email.trim()) {
      onAddUser(newUser);
      setNewUser({ name: '', email: '', role: 'user' });
      setShowAddModal(false);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser({...user});
    setShowEditModal(true);
  };

  const handleUpdateUser = () => {
    if (editingUser && editingUser.name.trim() && editingUser.email.trim()) {
      onUpdateUser(editingUser.id, {
        name: editingUser.name,
        email: editingUser.email,
        role: editingUser.role
      });
      setShowEditModal(false);
      setEditingUser(null);
    }
  };

  return (
    <div>
      {/* Search and Add Bar */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <Search size={16} />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4 text-end">
              <button 
                className="btn btn-primary"
                onClick={() => setShowAddModal(true)}
              >
                <Plus size={16} className="me-2" />
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Quizzes Taken</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="fw-semibold">{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge ${user.role === 'admin' ? 'bg-primary' : 'bg-secondary'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>{user.quizzesTaken}</td>
                    <td>
                      <span className={`badge ${user.status === 'active' ? 'bg-success' : 'bg-danger'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button 
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleEditUser(user)}
                        >
                          <Edit size={14} />
                        </button>
                        <button 
                          className={`btn btn-sm ${
                            user.status === 'active' ? 'btn-outline-danger' : 'btn-outline-success'
                          }`}
                          onClick={() => onToggleUserStatus(user.id)}
                        >
                          {user.status === 'active' ? <XCircle size={14} /> : <CheckCircle size={14} />}
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => onDeleteUser(user.id)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New User</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={newUser.name}
                    onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                    placeholder="Enter full name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control"
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select 
                    className="form-select"
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleAddUser}>
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && editingUser && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit User</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={editingUser.name}
                    onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
                    placeholder="Enter full name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control"
                    value={editingUser.email}
                    onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select 
                    className="form-select"
                    value={editingUser.role}
                    onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleUpdateUser}>
                  Update User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// SettingsPanel Component
const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    siteName: 'QuizWhizz',
    adminEmail: 'sajjadkhankhattak20.gmail.com',
    allowRegistrations: true
  });

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h5 className="fw-semibold mb-4">Platform Settings</h5>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Site Name</label>
            <input 
              type="text" 
              className="form-control"
              value={settings.siteName}
              onChange={(e) => setSettings({...settings, siteName: e.target.value})}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Admin Email</label>
            <input 
              type="email" 
              className="form-control"
              value={settings.adminEmail}
              onChange={(e) => setSettings({...settings, adminEmail: e.target.value})}
            />
          </div>
        </div>
        <div className="form-check form-switch mb-3">
          <input 
            className="form-check-input" 
            type="checkbox"
            checked={settings.allowRegistrations}
            onChange={(e) => setSettings({...settings, allowRegistrations: e.target.checked})}
          />
          <label className="form-check-label">Allow New User Registrations</label>
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default AdminPortal;