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
                <div className="timeline-card glass-panel">
                  <div className="phase-header">
                    <div>
                      <span className="phase-tagline">{phase.timeframe}</span>
                      <h3 className="phase-title">{phase.title}</h3>
                    </div>
                  </div>

                  <p className="phase-summary">{phase.summary}</p>

                  <div className="phase-milestones-inline">
                    {phase.items.map((item, idx) => (
                      <div key={idx} className="milestone-pill">
                        <span
                          className={`milestone-indicator ${
                            item.status === 'Done' ? 'indicator-done' : ''
                          }`}
                          aria-hidden="true"
                        >
                          {item.status === 'Done' ? '✓' : '•'}
                        </span>
                        <span className="milestone-text">{item.name}</span>
                      </div>
                    ))}
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
