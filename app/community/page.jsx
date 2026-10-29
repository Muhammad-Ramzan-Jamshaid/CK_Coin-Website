'use client';

import { useState } from 'react';
import SectionHeading from '../../components/SectionHeading';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { siteConfig } from '../../data/siteConfig';

export default function CommunityPage() {
  const [selectedSocialNotice, setSelectedSocialNotice] = useState(null);

  const handleChannelClick = (social) => {
    if (!social.available || !social.url) {
      setSelectedSocialNotice({
        name: social.name,
        handle: social.handle,
        status: social.status,
        message: `The official ${social.name} channel is currently in preparation. To prevent scammers from launching counterfeit groups, the official link will be posted right here once verified by the founders.`,
      });
    } else {
      window.open(social.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="community-page">
      {/* 1. Community Hero Section */}
      <section className="section-py community-hero" aria-label="Official Channels">
        <div className="container">
          <SectionHeading
            badge="Official Headquarters"
            title="The Royal"
            highlight="Community"
            subtitle="Connect directly with fellow CK believers. To safeguard all members, only founder-authorized channels are published on this portal."
          />

          {/* Social Channels Grid */}
          <div className="channels-grid">
            {siteConfig.socials.map((social) => (
              <div key={social.id} className="channel-card glass-panel">
                <div className="channel-top">
                  <div className="channel-icon">
                    {social.id === 'telegram' && '✈️'}
                    {social.id === 'twitter' && '𝕏'}
                    {social.id === 'discord' && '💬'}
                  </div>
                  <span className={`badge ${social.available ? 'badge-active' : 'badge-tba'}`}>
                    {social.available ? 'Live' : 'Pending Activation'}
                  </span>
                </div>

                <h3 className="channel-name">{social.name}</h3>
                <p className="channel-handle">{social.handle}</p>
                <p className="channel-desc">{social.description}</p>

                <div className="channel-action">
                  {social.available && social.url ? (
                    <Button
                      href={social.url}
                      isExternal={true}
                      variant="primary"
                      size="sm"
                      style={{ width: '100%' }}
                    >
                      Join {social.name} &rarr;
                    </Button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%' }}
                      onClick={() => handleChannelClick(social)}
                    >
                      View Channel Status
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Channel Modal / Notice */}
          {selectedSocialNotice && (
            <div
              className="channel-notice-overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="notice-dialog-title"
            >
              <div className="channel-notice-modal glass-panel">
                <div className="modal-header">
                  <div className="modal-title-wrap">
                    <span className="modal-icon">🛡️</span>
                    <h3 id="notice-dialog-title" className="modal-title">
                      {selectedSocialNotice.name} Status
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="modal-close-btn"
                    aria-label="Close dialog"
                    onClick={() => setSelectedSocialNotice(null)}
                  >
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  <span className="badge badge-gold modal-status-badge">
                    {selectedSocialNotice.status}
                  </span>
                  <p className="modal-handle">
                    Planned Handle: <code>{selectedSocialNotice.handle}</code>
                  </p>
                  <p className="modal-message">{selectedSocialNotice.message}</p>
                </div>

                <div className="modal-footer">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setSelectedSocialNotice(null)}
                  >
                    I Understand
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. Kingdom Community Pillars & Code of Conduct */}
      <section className="section-py community-pillars-section" aria-label="Community Values">
        <div className="container">
          <SectionHeading
            badge="Kingdom Standard"
            title="The Royal Code of"
            highlight="Conduct"
            subtitle="CK Coin is built on mutual respect, transparent discourse, and genuine enthusiasm."
          />

          <div className="pillars-grid">
            <Card
              icon="👑"
              badge={<span className="badge badge-gold">Pillar #1</span>}
              title="Respect & Brotherhood"
              subtitle="Kingdom Harmony"
            >
              <p>
                Every member of the CK Kingdom is valued equally. Toxicity, hate speech, and spamming promotional links
                are strictly prohibited across all official chats and discussion boards.
              </p>
            </Card>

            <Card
              icon="🛡️"
              badge={<span className="badge badge-purple">Pillar #2</span>}
              title="Fact-First Discussions"
              subtitle="Anti-FUD & Anti-Shill"
              highlight={true}
            >
              <p>
                We value realistic expectations over empty hype. Members are encouraged to discuss roadmap milestones,
                token mechanics, and network updates based on verified announcements.
              </p>
            </Card>

            <Card
              icon="🗳️"
              badge={<span className="badge badge-active">Pillar #3</span>}
              title="Community Voice"
              subtitle="Governance Input"
            >
              <p>
                As outlined in Phase 4 of our roadmap, active community members will have direct voting rights on marketing
                initiatives, treasury allocations, and future ecosystem expansions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Anti-Scam Security Guidelines */}
      <section className="section-py security-section" aria-label="Security & Verification Guidelines">
        <div className="container">
          <SectionHeading
            badge="Safety Protocol"
            title="How We Protect"
            highlight="Our Community"
            subtitle="Crypto security begins with proactive defense. Keep these three core safety rules in mind."
          />

          <div className="security-cards-grid">
            <Card
              icon="🚫"
              title="No Team DMs"
              subtitle="Verification Rule #1"
            >
              <p>
                Admins and founders of CK Coin will <strong>never direct message (DM) you first</strong> offering customer
                support, exclusive bonus allocations, or early wallet verification. Any DM asking for funds is an impersonator.
              </p>
            </Card>

            <Card
              icon="🔑"
              title="Never Share Seed Phrases"
              subtitle="Verification Rule #2"
              highlight={true}
            >
              <p>
                No legitimate cryptocurrency project or technical representative will ever ask for your private keys, seed
                phrase, or wallet passcodes. Never connect your wallet to unverified external sites.
              </p>
            </Card>

            <Card
              icon="🔗"
              title="Official Link Verification"
              subtitle="Verification Rule #3"
            >
              <p>
                Always bookmark <code>ckcoin.community</code> (or confirmed official domain). Verify that every link,
                contract address, and announcement matches the URLs published on this verified static portal.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Dedicated FAQ Callout Banner */}
      <section className="section-py community-faq-callout" aria-label="Visit FAQ Knowledge Base">
        <div className="container">
          <div className="callout-card glass-panel">
            <div className="callout-content">
              <h2 className="callout-title">
                Got Questions About <span className="gradient-text-royal">CK Coin?</span>
              </h2>
              <p className="callout-sub">
                Explore our dedicated FAQ portal for straightforward answers regarding launch schedule, blockchain network,
                contract address security, token distribution, and anti-scam rules.
              </p>
              <div className="callout-actions">
                <Button href="/faq" variant="primary" size="lg">
                  <span>Browse Full FAQ Page</span>
                  <span aria-hidden="true">&rarr;</span>
                </Button>
                <Button
                  href="https://t.me/Crazyking7860"
                  isExternal={true}
                  variant="secondary"
                  size="lg"
                >
                  <span>Ask in Telegram Group</span>
                  <span aria-hidden="true">&rarr;</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Risk Disclaimer Callout */}
      <section className="section-py disclaimer-section" aria-label="Risk Disclaimer">
        <div className="container">
          <div className="risk-card glass-panel">
            <div className="risk-icon">⚠️</div>
            <div className="risk-text">
              <h3 className="risk-title">Cryptocurrency Risk Disclosure</h3>
              <p>
                Participating in cryptocurrency markets involves inherent risks, including high volatility and potential
                loss of principal. The information provided on this website is for informational and educational purposes
                only and does not constitute financial, investment, or legal advice. Please consult with licensed financial
                advisors before engaging in digital asset activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
