'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import SectionHeading from '../../components/SectionHeading';
import FAQAccordion from '../../components/FAQAccordion';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { faqsData } from '../../data/faqs';
import { siteConfig } from '../../data/siteConfig';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(faqsData.map((f) => f.category))];
    return cats;
  }, []);

  // Filter items based on category and search query
  const filteredFaqs = useMemo(() => {
    return faqsData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="faq-page">
      {/* 1. FAQ Hero Section */}
      <section className="section-py faq-hero" aria-label="Knowledge Base & FAQs">
        <div className="container">
          <SectionHeading
            badge="Knowledge Base"
            title="Frequently Asked"
            highlight="Questions"
            subtitle="Verified facts, launch specifics, security protocols, and tokenomics details for CK Coin."
          />

          {/* Interactive Search & Category Filter Controls */}
          <div className="faq-controls-wrap">
            {/* Search Input */}
            <div className="faq-search-box">
              <span className="faq-search-icon" aria-hidden="true">🔍</span>
              <input
                type="search"
                className="faq-search-input"
                placeholder="Search questions or keywords (e.g. launch, contract, network)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search frequently asked questions"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="faq-filter-chips" role="tablist" aria-label="FAQ Categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`faq-filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Component */}
          {filteredFaqs.length > 0 ? (
            <FAQAccordion items={filteredFaqs} />
          ) : (
            <div className="faq-empty-state glass-panel">
              <p>No questions matched your search query &ldquo;{searchQuery}&rdquo;.</p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '1rem' }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 2. Still Have Questions Callout */}
      <section className="section-py faq-help-section" aria-label="Ask Community">
        <div className="container">
          <div className="callout-card glass-panel">
            <div className="callout-content">
              <h2 className="callout-title">
                Ask Directly In <span className="gradient-text-royal">The Community</span>
              </h2>
              <p className="callout-sub">
                Our founders and active moderators are always ready to address legitimate inquiries, verify announcements,
                and clarify project updates. Connect through our official channels.
              </p>
              <div className="callout-actions">
                <Button
                  href="https://t.me/Crazyking7860"
                  isExternal={true}
                  variant="primary"
                  size="lg"
                >
                  <span>Join Telegram</span>
                  <span aria-hidden="true">&rarr;</span>
                </Button>
                <Button
                  href="https://x.com/CrAzYKiNg0786"
                  isExternal={true}
                  variant="secondary"
                  size="lg"
                >
                  <span>Follow on 𝕏</span>
                  <span aria-hidden="true">&rarr;</span>
                </Button>
                <Button href="/community" variant="ghost" size="lg">
                  <span>Visit Community Hub</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Risk Disclaimer */}
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
