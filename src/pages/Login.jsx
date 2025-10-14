export default function Login() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-4">
              <div className="text-center mb-3">
                <h2 className="fw-bold text-primary mb-2">Welcome Back</h2>
                <p className="text-muted">Sign in to your QuizWizzes account</p>
              </div>
              
              <form>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="loginEmail" 
                    placeholder="Sajjad@example.com"
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="loginPassword" 
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="#forgot" className="text-primary text-decoration-none">Forgot password?</a>
                </div>
                
                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Sign In
                </button>
                
                <div className="text-center mb-3">
                  <div className="position-relative">
                    <hr />
                    <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted">
                      or continue with
                    </span>
                  </div>
                </div>
                
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <button type="button" className="btn btn-outline-secondary w-100">
                      <i className="bi bi-google me-2"></i>
                      Google
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-outline-secondary w-100">
                      <i className="bi bi-facebook me-2"></i>
                      Facebook
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="text-muted">Don't have an account? </span>
                  <a href="/signup" className="text-primary fw-semibold text-decoration-none">Sign Up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}