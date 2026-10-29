'use client';

import { useState } from 'react';

export default function FAQAccordion({ items = [] }) {
  const [openIds, setOpenIds] = useState(['faq-1']); // First one open by default

  const toggleItem = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="faq-accordion-group" role="region" aria-label="Frequently Asked Questions">
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `faq-header-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`faq-item glass-panel ${isOpen ? 'faq-item-open' : ''}`}
          >
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="faq-trigger"
                onClick={() => toggleItem(item.id)}
              >
                <span className="faq-question-text">
                  <span className="faq-number">0{index + 1}.</span> {item.question}
                </span>
                <span className="faq-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`faq-chevron ${isOpen ? 'chevron-rotated' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`faq-panel ${isOpen ? 'panel-expanded' : 'panel-collapsed'}`}
            >
              <div className="faq-answer-inner">
                <p>{item.answer}</p>
                {item.category && (
                  <div className="faq-category-tag">
                    <span className="badge badge-purple">{item.category}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
