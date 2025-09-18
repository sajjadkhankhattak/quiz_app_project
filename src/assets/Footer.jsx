import './Footer.css';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="community-section">
                    <h3>Join the Community</h3>
                    <div className="social-links">
                        <a href="#facebook" className="social-link">
                            <FaFacebook />
                        </a>
                        <a href="#twitter" className="social-link">
                            <FaTwitter />
                        </a>
                        <span className="follow-text">Follow us!</span>
                    </div>
                </div>
                
                <div className="footer-links">
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                    <a href="#terms">Terms</a>
                    <a href="#service">Terms of Service</a>
                    <a href="#privacy">Privacy Policy</a>
                </div>
                
                <div className="copyright">
                    © 2024 QuizMaster
                </div>
            </div>
        </footer>
    );
}

export default Footer;