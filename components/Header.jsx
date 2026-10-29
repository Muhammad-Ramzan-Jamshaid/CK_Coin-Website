'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '../data/siteConfig';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}
      role="banner"
    >
      <div className="container header-container">
        {/* Brand Mark (FR-02: links back to Home) */}
        <Link href="/" className="brand-mark" aria-label="CK Coin Home">
          <div className="coin-icon-mark" aria-hidden="true">
            <span className="coin-crown">👑</span>
            <span className="coin-letters">CK</span>
          </div>
          <div className="brand-titles">
            <span className="brand-name">{siteConfig.name}</span>
            <span className="brand-tag">{siteConfig.tagline}</span>
          </div>
        </Link>

        {/* Desktop Navigation (FR-01) */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {siteConfig.navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Right Action */}
        <div className="header-actions">
          <div className="header-social-links" aria-label="Official Social Channels">
            <a
              href="https://t.me/Crazyking7860"
              target="_blank"
              rel="noopener noreferrer"
              className="header-social-btn"
              title="Official Telegram Group"
              aria-label="Telegram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
            <a
              href="https://x.com/CrAzYKiNg0786"
              target="_blank"
              rel="noopener noreferrer"
              className="header-social-btn"
              title="Official X (Twitter)"
              aria-label="X (Twitter)"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          <Link
            href={siteConfig.cta.community.href}
            className="btn btn-primary btn-sm header-cta"
          >
            <span>{siteConfig.cta.community.label}</span>
          </Link>

          {/* Mobile Menu Toggle Button (FR-07) */}
          <button
            type="button"
            className="mobile-toggle-btn"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-open-top' : ''}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-open-mid' : ''}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-open-bot' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (FR-07) */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-content">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {siteConfig.navLinks.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-drawer-socials">
            <a
              href="https://t.me/Crazyking7860"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-chip"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="chip-icon">✈️</span>
              <span>Official Telegram</span>
            </a>
            <a
              href="https://x.com/CrAzYKiNg0786"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-chip"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="chip-icon">𝕏</span>
              <span>Official X (Twitter)</span>
            </a>
          </div>

          <div className="mobile-drawer-cta">
            <Link
              href={siteConfig.cta.community.href}
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {siteConfig.cta.community.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
