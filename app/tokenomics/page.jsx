import SectionHeading from '../../components/SectionHeading';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { tokenomicsData } from '../../data/tokenomics';

export const metadata = {
  title: 'Tokenomics & Specifications',
  description: 'Transparent token facts for CK Coin. Verified ticker, allocation principles, contract deployment status, and safety measures.',
};

export default function TokenomicsPage() {
  const { metrics, contractStatus, principles } = tokenomicsData;

  return (
    <div className="tokenomics-page">
      {/* Page Header */}
      <section className="section-py tokenomics-hero" aria-label="Tokenomics Overview">
        <div className="container">
          <SectionHeading
            badge="Token Specifications"
            title="Transparent"
            highlight="Tokenomics"
            subtitle="Clear, verified project facts. We do not publish fictional distribution percentages or fabricated contract addresses."
          />

          {/* Quick Metrics Grid */}
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className={`metric-card glass-panel ${!metric.isTba ? 'metric-card-verified' : ''}`}
              >
                <div className="metric-header">
                  <span className="metric-label">{metric.label}</span>
                  <span
                    className={`badge ${
                      !metric.isTba ? 'badge-gold' : 'badge-tba'
                    }`}
                  >
                    {metric.status}
                  </span>
                </div>

                <div className="metric-value-box">
                  <span className={`metric-value ${!metric.isTba ? 'glow-text-gold' : 'text-tba'}`}>
                    {metric.value}
                  </span>
                </div>

                <p className="metric-hint">{metric.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Verification Section */}
      <section className="section-py contract-status-section" aria-label="Smart Contract Status">
        <div className="container">
          <div className="contract-status-card glass-panel">
            <div className="contract-header">
              <div className="contract-icon-mark">🛡️</div>
              <div>
                <span className="badge badge-purple">{contractStatus.statusLabel}</span>
                <h2 className="contract-title">Official Smart Contract Security</h2>
              </div>
            </div>

            <p className="contract-desc">{contractStatus.description}</p>

            <div className="contract-address-box">
              <div className="address-inner">
                <span className="address-label">Contract Address:</span>
                <code className="address-display">
                  {contractStatus.address ? contractStatus.address : "TO BE ANNOUNCED UPON MAINNET DEPLOYMENT"}
                </code>
              </div>

              {contractStatus.isDeployed ? (
                <button type="button" className="btn btn-primary btn-sm">
                  Copy Address
                </button>
              ) : (
                <span className="badge badge-tba address-status-badge">
                  Deployment Verification Pending
                </span>
              )}
            </div>

            <div className="security-alert-box">
              <span className="alert-badge">SECURITY NOTICE</span>
              <p className="alert-text">
                Do not purchase tokens from any decentralized exchange claiming to be <strong>CK Coin ($CK)</strong> prior
                to an official announcement posted directly to this portal. Scam tokens using our artwork and name will
                have zero connection to this project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Allocation & Distribution Framework */}
      <section className="section-py allocation-section" aria-label="Token Allocation Framework">
        <div className="container">
          <SectionHeading
            badge="Distribution Model"
            title="Fair Allocation"
            highlight="Standards"
            subtitle="Our structural principles for launching a sustainable, community-backed cryptocurrency."
          />

          <div className="principles-grid">
            {principles.map((item, index) => (
              <Card
                key={index}
                icon="⚖️"
                title={item.title}
                subtitle="Core Policy"
                highlight={index === 0}
              >
                <p>{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="tba-explanation-box glass-panel">
            <h3 className="tba-title">Why isn&apos;t there a pie chart?</h3>
            <p className="tba-text">
              Many cryptocurrency websites generate colorful 3D pie charts with arbitrary percentages (e.g., &quot;50% Burn, 30% Marketing, 20% Team&quot;) before tokenomics are even legally or cryptographically audited. At CK Coin, we hold ourselves to a higher standard: <strong>We only publish figures after contract code and lock mechanics have been verified.</strong>
            </p>
            <div className="tba-actions">
              <Button href="/community" variant="secondary" size="md">
                <span>Join Community For Announcements</span>
                <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
