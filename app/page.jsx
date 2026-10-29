import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import LaunchCountdown from '../components/LaunchCountdown';
import { siteConfig } from '../data/siteConfig';

export const metadata = {
  title: 'CK Coin | The Crown Is Coming',
  description: 'Official portal for CK Coin ($CK). The sovereign purple gorilla meme coin favored by diamond-hand believers worldwide.',
};

export default function HomePage() {
  return (
    <div className="home-page">
      {/* 1. HERO SECTION (Clean, Bold, Live Launch Countdown) */}
      <section className="hero-section" aria-label="Hero Introduction">
        <div className="cosmic-glow glow-top-center" aria-hidden="true"></div>
        <div className="cosmic-glow glow-right-purple" aria-hidden="true"></div>
        <div className="cosmic-glow glow-gold-subtle" aria-hidden="true"></div>

        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-headline">
              <span className="headline-light">THE CROWN</span><br />
              <span className="gradient-text-royal">IS COMING.</span>
            </h1>

            <p className="hero-subheading">
              An open-source, community-led royal meme coin favored by sovereign believers worldwide.
              Dethroning copycat dog tokens with pure purple gorilla swagger.
            </p>
          </div>

          {/* Hero Visual / Mascot Showcase */}
          <div className="hero-visual-col">
            <div className="mascot-frame-outer">
              <div className="mascot-orbit-ring ring-1" aria-hidden="true"></div>
              <div className="mascot-orbit-ring ring-2" aria-hidden="true"></div>

              <div className="mascot-image-wrapper">
                <Image
                  src="/assets/ck-hero-reference.jpg"
                  alt="CK Coin Mascot: Purple royal gorilla with golden crown and sunglasses"
                  width={680}
                  height={680}
                  priority
                  className="mascot-hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMMUNITY COUNTDOWN & ACTION BANNER (Right Below Hero) */}
      <section className="section-py community-callout-section" aria-label="Join Community">
        <div className="container">
          <div className="callout-card">
            <div className="callout-content">
              <h2 className="callout-title">
                Claim Your Seat In <span className="gradient-text-royal">The CK Kingdom</span>
              </h2>
              <p className="callout-sub">
                Be the first to hear official announcements, launch date confirmations, contract address deployment,
                and community votes. No spam, no scams, only verified project updates.
              </p>

              {/* Horizontally Aligned Launch Countdown Timer */}
              <div className="callout-countdown-wrap">
                <LaunchCountdown />
              </div>

              <div className="callout-actions">
                <Button
                  href="https://t.me/Crazyking7860"
                  isExternal={true}
                  variant="primary"
                  size="sm"
                >
                  <span>Join Telegram</span>
                  <span aria-hidden="true">&rarr;</span>
                </Button>
                <Button
                  href="https://x.com/CrAzYKiNg0786"
                  isExternal={true}
                  variant="secondary"
                  size="sm"
                >
                  <span>Follow on 𝕏</span>
                  <span aria-hidden="true">&rarr;</span>
                </Button>
                <Button href="/community" variant="ghost" size="sm">
                  <span>Community Hub</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "WHAT IS CK COIN?" (Clean, Light & Punchy, No Badges) */}
      <section className="section-py what-is-section" id="about" aria-label="What is CK Coin">
        <div className="container">
          <div className="intro-card glass-panel">
            <h2 className="intro-title">
              What is <span className="gradient-text-purple">CK Coin?</span>
            </h2>
            <p className="intro-lead">
              <strong>CK Coin ($CK)</strong> is a community-driven royal meme coin forged to dethrone boring copycat dog coins
              with pure purple gorilla swagger, unapologetic humor, and 100% factual transparency.
            </p>

            <div className="intro-points-grid">
              <div className="intro-point">
                <div className="point-icon">👑</div>
                <div>
                  <h3 className="point-title">Royal Mascot</h3>
                  <p className="point-desc">Original purple gorilla artwork, gold crown, and sunglasses.</p>
                </div>
              </div>
              <div className="intro-point">
                <div className="point-icon">🛡️</div>
                <div>
                  <h3 className="point-title">100% Fair Launch</h3>
                  <p className="point-desc">Zero secret presales, no VC allocations, equal start for all.</p>
                </div>
              </div>
              <div className="intro-point">
                <div className="point-icon">💎</div>
                <div>
                  <h3 className="point-title">0% Buy & Sell Taxes</h3>
                  <p className="point-desc">Clean contract designed with zero hidden fees on transfers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "HOW TO GET STARTED" (Clean 3 Steps) */}
      <section className="section-py get-started-section" id="how-to-buy" aria-label="How to Get Started">
        <div className="container">
          <SectionHeading
            title="How to Get Started in"
            highlight="3 Steps"
            subtitle="Follow these 3 simple steps to join the Kingdom and prepare for launch."
          />

          <div className="steps-grid">
            <div className="step-card glass-panel">
              <div className="step-header">
                <span className="step-number">01</span>
                <div className="step-icon-wrap">👛</div>
              </div>
              <h3 className="step-title">Choose Your Wallet</h3>
              <p className="step-desc">
                Set up a self-custodial Web3 wallet (MetaMask, Trust Wallet, or Phantom). Secure your 12-word recovery phrase safely offline.
              </p>
              <Link href="/faq" className="step-footer-link">
                <span>Wallet Safety FAQ</span> &rarr;
              </Link>
            </div>

            <div className="step-card glass-panel" style={{ borderColor: 'var(--border-gold)' }}>
              <div className="step-header">
                <span className="step-number">02</span>
                <div className="step-icon-wrap" style={{ background: 'rgba(255, 201, 40, 0.18)' }}>🛡️</div>
              </div>
              <h3 className="step-title">Verify Official Safety</h3>
              <p className="step-desc">
                Only bookmark <code>ckcoin.community</code>. Our team will never direct message (DM) you first asking for funds or private keys.
              </p>
              <Link href="/community" className="step-footer-link">
                <span>Safety Guidelines</span> &rarr;
              </Link>
            </div>

            <div className="step-card glass-panel">
              <div className="step-header">
                <span className="step-number">03</span>
                <div className="step-icon-wrap">🚀</div>
              </div>
              <h3 className="step-title">Acquire & Ascend</h3>
              <p className="step-desc">
                On launch day (Target: 1st Nov), verified DEX liquidity pools will open. Swap for $CK and join our official Telegram group!
              </p>
              <a
                href="https://t.me/Crazyking7860"
                target="_blank"
                rel="noopener noreferrer"
                className="step-footer-link"
              >
                <span>Join Official Telegram</span> &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "CK-PEDIA: EXPLORE THE ECOSYSTEM" */}
      <section className="section-py ckpedia-section" aria-label="Ecosystem Resources">
        <div className="container">
          <SectionHeading
            title="CK-Pedia:"
            highlight="Explore The Kingdom"
            subtitle="Browse verified documentation, milestone timelines, token economics, and answers to your questions."
          />

          <div className="ckpedia-grid">
            <Link href="/tokenomics" className="ckpedia-card glass-panel">
              <div className="ckpedia-top">
                <span className="ckpedia-icon">🪙</span>
                <span className="ckpedia-arrow" aria-hidden="true">&rarr;</span>
              </div>
              <h3 className="ckpedia-title">Tokenomics</h3>
              <p className="ckpedia-desc">
                Review confirmed supply metrics (1 Billion tokens), fair allocation standards, and blockchain network selection.
              </p>
            </Link>

            <Link href="/roadmap" className="ckpedia-card glass-panel">
              <div className="ckpedia-top">
                <span className="ckpedia-icon">🗺️</span>
                <span className="ckpedia-arrow" aria-hidden="true">&rarr;</span>
              </div>
              <h3 className="ckpedia-title">Roadmap</h3>
              <p className="ckpedia-desc">
                Explore our realistic 4-phase journey: Brand Genesis, Smart Contract & Audit, Fair Launch, and Kingdom Governance.
              </p>
            </Link>

            <Link href="/faq" className="ckpedia-card glass-panel">
              <div className="ckpedia-top">
                <span className="ckpedia-icon">❓</span>
                <span className="ckpedia-arrow" aria-hidden="true">&rarr;</span>
              </div>
              <h3 className="ckpedia-title">FAQ Portal</h3>
              <p className="ckpedia-desc">
                Instant keyword search across all frequently asked questions covering launch target, contract safety, and wallets.
              </p>
            </Link>

            <Link href="/community" className="ckpedia-card glass-panel">
              <div className="ckpedia-top">
                <span className="ckpedia-icon">🛡️</span>
                <span className="ckpedia-arrow" aria-hidden="true">&rarr;</span>
              </div>
              <h3 className="ckpedia-title">Community & Security</h3>
              <p className="ckpedia-desc">
                Join verified Telegram & X channels, review the anti-scam protocol, and learn how to stay protected.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
