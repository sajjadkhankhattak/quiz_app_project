export default function Signup() {
  return (
    <div className="container-fluid vh-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="row h-100 justify-content-center align-items-center">
        {/* Changed to smaller column size */}
        <div className="col-11 col-sm-10 col-md-8 col-lg-5 col-xl-4">
          <div className="card shadow-lg border-0 rounded-3">
            {/* Reduced padding */}
            <div className="card-body p-4 p-md-4">
              <div className="text-center mb-3">
                <h2 className="fw-bold text-primary mb-1">Create Account</h2>
                <p className="text-muted">Join QuizWizzes today!</p>
              </div>
              
              <form>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <label htmlFor="firstName" className="form-label small fw-semibold">First Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName" 
                      placeholder="Sajjad"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <label htmlFor="lastName" className="form-label small fw-semibold">Last Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName" 
                      placeholder="alam"
                    />
                  </div>
                </div>
                
                <div className="mb-2">
                  <label htmlFor="email" className="form-label small fw-semibold">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Sajjad@example.com"
                  />
                </div>
                
                <div className="mb-2">
                  <label htmlFor="password" className="form-label small fw-semibold">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label small fw-semibold">Confirm Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="terms" />
                  <label className="form-check-label text-muted small" htmlFor="terms">
                    I agree to the <a href="#terms" className="text-primary">Terms</a> and <a href="#privacy" className="text-primary">Privacy Policy</a>
                  </label>
                </div>
                
                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Create Account
                </button>
                
                <div className="text-center">
                  <span className="text-muted small">Already have an account? </span>
                  <a href="/login" className="text-primary fw-semibold small text-decoration-none">Sign In</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}