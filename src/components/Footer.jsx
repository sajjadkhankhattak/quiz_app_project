import { BsFacebook , BsTwitter, BsLinkedin, BsYoutube} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-white text-light pt-5 pb-4 mt-5">
      <div className="container ">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img width="80" class="d-inline-block align-text-top" src="/images/image.png"/>
            </div>
            <p className="text-muted small">
              Create and share engaging quizzes, tests, and assessments. Learn, teach, and have fun!
            </p>
            <div className="d-flex gap-2 mt-3">
              <a href="#" className="btn btn-sm btn-outline-light rounded-circle p-2">
                <BsFacebook size={18} color="grey"/>
              </a>
              <a href="#" className="btn btn-sm btn-outline-light rounded-circle p-2">
                <BsTwitter size={18} color="grey"/>
              </a>
              <a href="#" className="btn btn-sm btn-outline-light rounded-circle p-2">
                <BsLinkedin size={18} color="grey"/>
              </a>
              <a href="#" className="btn btn-sm btn-outline-light rounded-circle p-2">
                <BsYoutube size={18} color="grey"/>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-black mb-3">Products</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Quiz Maker</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Survey Maker</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Poll Maker</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Training Maker</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Assessment Software</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-black mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Tutorials</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Case Studies</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Webinars</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-black mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Contact</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Partners</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Affiliates</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="text-black mb-3">Stay Updated</h6>
            <p className="text-muted small">Subscribe to our newsletter for the latest quizzes and updates.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-muted small mb-0">
              © 2025 ProProfs. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-muted text-decoration-none small">Privacy Policy</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-muted text-decoration-none small">Terms of Service</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-muted text-decoration-none small">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
