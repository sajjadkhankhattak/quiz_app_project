export default function Signup() {
  return (
    <div className="container-fluid vh-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-5 col-lg-4">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">Create Account</h2>
                <p className="text-muted">Join QuizWizzes today!</p>
              </div>
              
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="firstName" 
                      placeholder="John"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="lastName" 
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    id="email" 
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control form-control-lg" 
                    id="password" 
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input 
                    type="password" 
                    className="form-control form-control-lg" 
                    id="confirmPassword" 
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="terms" />
                  <label className="form-check-label text-muted" htmlFor="terms">
                    I agree to the <a href="#terms" className="text-primary">Terms of Service</a> and <a href="#privacy" className="text-primary">Privacy Policy</a>
                  </label>
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
                  Create Account
                </button>
                
                <div className="text-center">
                  <span className="text-muted">Already have an account? </span>
                  <a href="/login" className="text-primary fw-semibold">Sign In</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}