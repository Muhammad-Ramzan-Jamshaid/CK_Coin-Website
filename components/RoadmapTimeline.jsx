export default function RoadmapTimeline({ phases = [] }) {
  return (
    <div className="roadmap-timeline" role="region" aria-label="Project Roadmap Timeline">
      <div className="timeline-track" aria-hidden="true"></div>

      <div className="phases-list">
        {phases.map((phase) => {
          const isActive = phase.statusType === 'active';
          const isTbd = phase.statusType === 'tbd';

          return (
            <div
              key={phase.phaseNumber}
              className={`timeline-item ${isActive ? 'item-active' : ''} ${isTbd ? 'item-tbd' : ''}`}
            >
              {/* Node Indicator */}
              <div className="timeline-node">
                <div className="node-outer">
                  <div className="node-inner">
                    <span>{phase.phaseNumber}</span>
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className="timeline-card-wrapper">
                <div className="glass-panel timeline-card">
                  <div className="phase-header">
                    <div>
                      <span className="phase-tagline">{phase.timeframe}</span>
                      <h3 className="phase-title">{phase.title}</h3>
                    </div>
                    <span
                      className={`badge ${
                        isActive ? 'badge-gold' : isTbd ? 'badge-tba' : 'badge-purple'
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>

                  <p className="phase-summary">{phase.summary}</p>

                  <div className="milestones-block">
                    <h4 className="milestones-title">Target Milestones:</h4>
                    <ul className="milestones-list">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="milestone-item">
                          <span
                            className={`milestone-bullet ${
                              item.status === 'Done' ? 'bullet-done' : 'bullet-pending'
                            }`}
                            aria-hidden="true"
                          >
                            {item.status === 'Done' ? '✓' : '○'}
                          </span>
                          <span className="milestone-name">{item.name}</span>
                          <span
                            className={`milestone-status-chip ${
                              item.status === 'Done' ? 'status-chip-done' : 'status-chip-tbd'
                            }`}
                          >
                            {item.status}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
