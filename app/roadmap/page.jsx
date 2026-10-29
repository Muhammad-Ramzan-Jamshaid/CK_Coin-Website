import SectionHeading from '../../components/SectionHeading';
import RoadmapTimeline from '../../components/RoadmapTimeline';
import Button from '../../components/Button';
import { roadmapData } from '../../data/roadmap';
import { siteConfig } from '../../data/siteConfig';

export const metadata = {
  title: 'Project Roadmap & Milestones',
  description: 'Verified milestones and phased roadmap for CK Coin. Track current phase execution, testnet plans, fair launch schedule, and kingdom governance.',
};

export default function RoadmapPage() {
  const { header, phases } = roadmapData;

  return (
    <div className="roadmap-page">
      {/* Page Header */}
      <section className="section-py roadmap-hero" aria-label="Roadmap Overview">
        <div className="container">
          <SectionHeading
            badge="Strategic Timeline"
            title="The Royal"
            highlight="Roadmap"
            subtitle={header.subtitle}
          />

          {/* Launch Date Notice Callout */}
          <div className="launch-notice-banner glass-panel">
            <div className="banner-left">
              <span className="badge badge-gold">Launch Target</span>
              <h2 className="banner-title">{siteConfig.launchAnnouncement.displayText}</h2>
              <p className="banner-sub">{siteConfig.launchAnnouncement.subtext}</p>
            </div>
            <div className="banner-right">
              <Button href="/community" variant="secondary" size="md">
                <span>Get Launch Alerts</span>
                <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </div>

          {/* Detailed Timeline Component */}
          <div className="timeline-container">
            <RoadmapTimeline phases={phases} />
          </div>

          {/* Bottom Transparency Notice */}
          <div className="roadmap-policy-box glass-panel">
            <div className="policy-icon">🧭</div>
            <div className="policy-text">
              <h3 className="policy-heading">Roadmap Governance Policy</h3>
              <p>
                Unlike projects that present rigid dates years into the future, CK Coin utilizes an agile, quality-driven
                deployment schedule. Milestones marked as <strong>TBD</strong> represent planned engineering objectives
                that will be assigned definitive execution dates once testnet validations and security audits conclude.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
