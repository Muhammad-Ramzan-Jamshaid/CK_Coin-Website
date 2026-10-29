'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

function calculateTimeLeft(targetTimestamp) {
  const targetDate = new Date(targetTimestamp || '2026-11-01T00:00:00+05:00').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { isLaunched: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    isLaunched: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

export default function LaunchCountdown({ targetTimestamp = siteConfig.launchAnnouncement.targetTimestamp }) {
  const [initialData] = useState(() => calculateTimeLeft(targetTimestamp));
  const [timeLeft, setTimeLeft] = useState({
    days: initialData.days,
    hours: initialData.hours,
    minutes: initialData.minutes,
    seconds: initialData.seconds,
  });
  const [isLaunched, setIsLaunched] = useState(initialData.isLaunched);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updateCountdown = () => {
      const current = calculateTimeLeft(targetTimestamp);
      setIsLaunched(current.isLaunched);
      setTimeLeft({
        days: current.days,
        hours: current.hours,
        minutes: current.minutes,
        seconds: current.seconds,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  // STATE 2: ONCE LAUNCH DATE ARRIVES
  if (isLaunched) {
    return (
      <div className="launch-celebration-card" role="region" aria-label="Coin Launch Status">
        <div className="celebration-badge-row">
          <span className="celebration-live-dot" aria-hidden="true"></span>
          <span className="celebration-badge">OFFICIALLY LIVE ON DEX</span>
        </div>

        <h3 className="celebration-heading">
          Wait is over, <span className="gradient-text-royal">finally coin is launched!</span>
        </h3>

        <p className="celebration-desc">
          The Crown has officially ascended! Verified trading liquidity is live. Connect and trade safely through the official channels below.
        </p>
      </div>
    );
  }

  // STATE 1: ACTIVE COUNTDOWN (Spans box width, target badge removed, centered title)
  return (
    <div className="launch-countdown-card" role="region" aria-label="Launch Countdown Timer">
      <div className="countdown-top-bar countdown-top-bar-centered">
        <div className="countdown-title-wrap">
          <span className="countdown-crown-icon" aria-hidden="true">👑</span>
          <span className="countdown-tag">LAUNCH COUNTDOWN</span>
        </div>
      </div>

      <div className="countdown-digits-grid">
        <div className="digit-box">
          <span className="digit-value glow-text-gold" suppressHydrationWarning>
            {formatNumber(timeLeft.days)}
          </span>
          <span className="digit-label">DAYS</span>
        </div>
        <div className="digit-sep" aria-hidden="true">:</div>
        <div className="digit-box">
          <span className="digit-value glow-text-gold" suppressHydrationWarning>
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="digit-label">HOURS</span>
        </div>
        <div className="digit-sep" aria-hidden="true">:</div>
        <div className="digit-box">
          <span className="digit-value glow-text-gold" suppressHydrationWarning>
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="digit-label">MINS</span>
        </div>
        <div className="digit-sep" aria-hidden="true">:</div>
        <div className="digit-box">
          <span className="digit-value glow-text-gold" suppressHydrationWarning>
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="digit-label">SECS</span>
        </div>
      </div>

      <div className="countdown-sub-bar">
        <span className="countdown-micro-note">⚡ 100% Fair Launch &bull; 0% Taxes &bull; Liquidity Locked</span>
      </div>
    </div>
  );
}
