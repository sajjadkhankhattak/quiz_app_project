import './Courses.css';
import { FaGlobe, FaFlask, FaMicrochip } from 'react-icons/fa';

function Courses() {
    const courses = [
        {
            icon: <FaGlobe className="course-icon" />,
            title: "Geography",
            description: "Explore global landmarks",
            color: "#4CAF50"
        },
        {
            icon: <FaFlask className="course-icon" />,
            title: "Science",
            description: "Connect with your studies",
            color: "#2196F3"
        },
        {
            icon: <FaMicrochip className="course-icon" />,
            title: "Technology",
            description: "Boost your tech minds",
            color: "#9C27B0"
        }
    ];

    return (
        <div className="courses-container">
            {courses.map((course, index) => (
                <div className="course-card" key={index}>
                    <div className="course-icon-wrapper" style={{ backgroundColor: course.color }}>
                        {course.icon}
                    </div>
                    <h4>{course.title}</h4>
                    <p>{course.description}</p>
                    <button className="play-now-btn">Play Now</button>
                </div>
            ))}
        </div>
    );
}

export default Courses;