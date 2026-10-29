import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../../components/SectionHeading';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { siteConfig } from '../../data/siteConfig';

export const metadata = {
  title: 'About the Project & Concept',
  description: 'The story behind CK Coin: a royal purple gorilla mascot wearing a gold crown and sunglasses, defining a sovereign standard in crypto community culture.',
};

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Page Header Banner */}
      <section className="about-hero-section section-py" aria-label="About CK Coin">
        <div className="container">
          <SectionHeading
            badge="Brand & Concept"
            title="The Royal Story of"
            highlight="CK Coin"
            subtitle="Born from the fusion of bold attitude, cosmic atmosphere, and unyielding honesty in crypto culture."
          />

          <div className="about-story-grid">
            <div className="story-content">
              <h2 className="story-heading">
                A Mascot Built To Rule: <span className="gradient-text-royal">The Sovereign Gorilla</span>
              </h2>
              <p className="story-paragraph">
                The cryptocurrency landscape is flooded with tired templates, uninspired canine clones, and empty
                promises. <strong>CK Coin</strong> was forged to break that cycle with pure regal confidence.
              </p>
              <p className="story-paragraph">
                Our mascot—a commanding royal purple gorilla adorned with custom gold aviator sunglasses, a heavy
                gem-encrusted crown, and gold CK emblems—represents strength, sovereignty, and fearless community
                alignment. The crown isn&apos;t just an accessory; it is a declaration: <em>The Crown Is Coming</em>.
              </p>
              <p className="story-paragraph">
                We believe community energy, memorable aesthetics, and crystal-clear communication matter more than
                fabricated tech buzzwords. CK Coin embraces its identity as a community-driven movement without hiding
                behind false pretenses.
              </p>

              <div className="story-cta-row">
                <Button href="/tokenomics" variant="primary" size="md">
                  <span>Explore Token Details</span>
                  <span aria-hidden="true">&rarr;</span>
                </Button>
                <Button href="/community" variant="secondary" size="md">
                  <span>Join The Kingdom</span>
                </Button>
              </div>
            </div>

            <div className="story-visual-wrap">
              <div className="visual-card glass-panel">
                <div className="visual-img-container">
                  <Image
                    src="/assets/ck-hero-reference.jpg"
                    alt="Official CK Coin Brand Poster and Mascot Reference"
                    width={560}
                    height={560}
                    className="visual-img"
                  />
                </div>
                <div className="visual-caption">
                  <span className="caption-tag">Official Brand Art</span>
                  <p className="caption-text">
                    &quot;The Crown Is Coming&quot; &bull; Royal purple gorilla with golden crown and CK medallions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-py principles-section" aria-label="Project Principles">
        <div className="container">
          <SectionHeading
            badge="Ethos & Standards"
            title="Our Guiding"
            highlight="Principles"
            subtitle="Transparent standards that govern how CK Coin operates and communicates."
          />

          <div className="principles-grid">
            <Card
              icon="🛡️"
              title="Radical Transparency"
              subtitle="Truth Over Hype"
            >
              <p>
                If a detail has not been confirmed—such as the exact launch year, blockchain network, or contract address—we
                explicitly state &quot;To be announced&quot;. We do not manufacture hype or mislead our community.
              </p>
            </Card>

            <Card
              icon="👑"
              title="Original Sovereign Design"
              subtitle="Uncompromising Visual Quality"
              highlight={true}
            >
              <p>
                Every visual asset, color palette token, and interface element is designed around the purple and gold
                cosmic aesthetic. We refuse generic white-paper corporate templates in favor of a bold, memorable identity.
              </p>
            </Card>

            <Card
              icon="🤝"
              title="Community Sovereignty"
              subtitle="Decentralized Alignment"
            >
              <p>
                A coin is only as formidable as the holders who champion it. The community is the true crown bearer. All
                major milestones will be communicated first to official community members.
              </p>
            </Card>

            <Card
              icon="⚡"
              title="No Fabricated Utility"
              subtitle="Honest Purpose"
            >
              <p>
                We do not claim fictional artificial intelligence integrations, vaporware metaverse games, or unrealistic
                ecosystem promises. Any utility exploration will be verified, audited, and owner-approved prior to announcement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Purpose Note / Disclaimer Box */}
      <section className="section-py note-section" aria-label="Intended Purpose Note">
        <div className="container">
          <div className="purpose-box glass-panel">
            <div className="purpose-icon">📜</div>
            <div className="purpose-text">
              <h3 className="purpose-title">Notice Regarding Intended Purpose & Utility</h3>
              <p>
                CK Coin is currently an informational, community-focused initiative. The official project founders have not
                authorized any claims of guaranteed monetary returns, financial yields, or speculative instruments. Future
                ecosystem utilities or integrations will only be published once verified code and audits exist. Always conduct
                personal due diligence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
