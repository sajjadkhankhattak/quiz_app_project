import './ScoreCard.css';


import { FaCheckCircle, FaCircle, FaUserTimes } from 'react-icons/fa';



function ScoreCard() {
    const scores = [
        {
            icon: <FaCheckCircle className="score-icon quiz-whiz" />, player: "QuizWhiz", username: "MindGames", score: 1
        },
        {
            icon: <FaCircle className="score-icon mind-games" />, player: "MindGames", username: "Brainiac", score: 8
        },
        {
            icon: <FaCheckCircle className="score-icon quiz-whiz" />, player: "SajjadPro", username: "Brainner", score: 6
        }
    ];

    return (
        <div className="score-card">
            <h2 className="score-title">Top Scorers</h2>
            <div className="score-table">
                <div className="score-header">
                    <span>Rank</span>
                    <span>Player</span>
                    <span>Score</span>
                </div>
                {scores.map((score, index) => (
                    <div className="score-row" key={index}>
                        <div className="rank">
                            {score.icon}
                            <span>{score.player}</span>
                        </div>
                        <span className="username">{score.username}</span>
                        <span className="score">{score.score}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScoreCard;