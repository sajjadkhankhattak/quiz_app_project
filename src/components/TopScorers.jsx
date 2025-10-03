import { CheckCircle } from 'lucide-react';

export default function TopScorers() {
  const scorers = [
    { rank: 1, player: 'QuizWhiz', opponent: 'MindGames', score: 1, icon: '✓', color: '#10b981' },
    { rank: 2, player: 'MindGames', opponent: 'Brainiac', score: 8, icon: '◎', color: '#ef4444' }
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold" style={{ color: '#1e293b' }}>Top Scorers</h2>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          <div className="row fw-semibold mb-3 pb-3 border-bottom">
            <div className="col-2">
              <h5 className="mb-0" style={{ color: '#1e293b' }}>Rank</h5>
            </div>
            <div className="col-5">
              <h5 className="mb-0" style={{ color: '#1e293b' }}>Player</h5>
            </div>
            <div className="col-5 text-end">
              <h5 className="mb-0" style={{ color: '#1e293b' }}>Score</h5>
            </div>
          </div>

          {scorers.map((scorer) => (
            <div key={scorer.rank} className="row align-items-center py-3 border-bottom">
              <div className="col-2">
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: scorer.color,
                      fontSize: '20px'
                    }}
                  >
                    {scorer.icon}
                  </div>
                  <span className="ms-3 fw-semibold" style={{ color: '#1e293b' }}>{scorer.player}</span>
                </div>
              </div>
              <div className="col-5">
                <span style={{ color: '#64748b' }}>{scorer.opponent}</span>
              </div>
              <div className="col-5 text-end">
                <span className="fs-5 fw-semibold" style={{ color: '#1e293b' }}>{scorer.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
