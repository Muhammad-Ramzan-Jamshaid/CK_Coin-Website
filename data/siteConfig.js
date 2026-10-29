/**
 * CK Coin - Central Site Configuration
 * All official project URLs, brand metadata, and status flags are managed here.
 * As noted in the project brief: No unofficial or fabricated URLs should be used.
 */

export const siteConfig = {
  name: "CK Coin",
  shortName: "CK",
  ticker: "CK",
  tagline: "The Crown Is Coming",
  description: "The sovereign royal purple gorilla meme coin favored by diamond-hand believers worldwide. 100% factual transparency, community power, and undeniable swagger.",
  url: "https://ckcoin.community", // placeholder production domain
  
  // Launch date announcement as displayed in official artwork
  launchAnnouncement: {
    displayText: "Launching 1st Nov",
    subtext: "Official Fair Launch on Decentralized Exchanges",
    isDateConfirmed: true,
    targetTimestamp: "2026-11-01T00:00:00+05:00", // Target: 1st Nov 2026
  },

  // Primary Call-to-Actions
  cta: {
    primary: {
      label: "Explore CK Coin",
      href: "/about",
    },
    community: {
      label: "Join the Community",
      href: "/community",
      isExternal: false,
    },
    whitepaper: {
      label: "Documentation (TBA)",
      status: "Coming Soon",
    }
  },

  // Community & Social Channels
  socials: [
    {
      name: "Telegram",
      id: "telegram",
      status: "Official Group",
      url: "https://t.me/Crazyking7860",
      handle: "@Crazyking7860",
      description: "Direct community discussions, announcements, and official team updates.",
      available: true,
    },
    {
      name: "X (Twitter)",
      id: "twitter",
      status: "Official X Account",
      url: "https://x.com/CrAzYKiNg0786",
      handle: "@CrAzYKiNg0786",
      description: "Official announcements, ecosystem news, and project media releases.",
      available: true,
    },
    {
      name: "Discord",
      id: "discord",
      status: "Community Server In Setup",
      url: null,
      handle: "CK Coin Kingdom",
      description: "Community hangout, governance discussions, and member roles.",
      available: false,
    },
  ],

  // Navigation Links
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Tokenomics", href: "/tokenomics" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Community", href: "/community" },
    { label: "FAQ", href: "/faq" },
  ],

  // Footer & Disclaimer info
  footer: {
    aboutText: "CK Coin is a royal, community-driven token project. Built for enthusiasts who value bold identity, transparency, and high standards.",
    disclaimer: "Disclaimer: Cryptocurrency tokens and digital assets are subject to market volatility and risk. Nothing on this website constitutes financial, investment, legal, or tax advice. Always conduct your own independent research before participating in any token launch.",
    copyrightYear: new Date().getFullYear(),
  }
};
