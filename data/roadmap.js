/**
 * CK Coin - Roadmap Data
 * Follows Section 4.5 & 9:
 * Clear milestones with draft/TBD indicators. No false claims of completed tasks.
 */

export const roadmapData = {
  header: {
    title: "Project Roadmap",
    subtitle: "A phased journey towards royalty. All milestones reflect verified development steps, with future phases clearly designated as draft plans until finalized by leadership.",
  },
  
  phases: [
    {
      phaseNumber: "01",
      title: "Phase 1: Brand Genesis & Identity",
      timeframe: "Current Phase",
      status: "In Progress",
      statusType: "active", // 'active', 'tbd', 'completed'
      summary: "Establishing the core purple-and-gold visual universe, official informational hub, and brand foundations.",
      items: [
        { name: "Mascot & Brand Design Finalization", status: "Done", verified: true },
        { name: "Static Informational Portal Release", status: "In Progress", verified: true },
        { name: "Brand Asset Kit & Typography Standards", status: "Done", verified: true },
        { name: "Official Community Architecture Setup", status: "In Progress", verified: false },
      ]
    },
    {
      phaseNumber: "02",
      title: "Phase 2: Community Assembly & Contract Audit",
      timeframe: "Q4 / Launch Phase (TBD)",
      status: "Draft / In Planning",
      statusType: "tbd",
      summary: "Opening official channels, smart contract testing on testnet, and security review prior to launch.",
      items: [
        { name: "Official Telegram & Community Channel Opening", status: "TBD", verified: false },
        { name: "Smart Contract Architecture & Testnet Run", status: "TBD", verified: false },
        { name: "Third-Party Code Audit & Security Assessment", status: "TBD", verified: false },
        { name: "Initial Tokenomics & Supply Cap Reveal", status: "TBD", verified: false },
      ]
    },
    {
      phaseNumber: "03",
      title: "Phase 3: Fair Launch & Liquidity Lock",
      timeframe: "Launch Date (1st Nov - Year TBD)",
      status: "Scheduled / Pending Confirmation",
      statusType: "tbd",
      summary: "Official mainnet deployment, transparent liquidity lock, and contract address publication.",
      items: [
        { name: "Official Mainnet Token Deployment", status: "TBD", verified: false },
        { name: "Permanent / Time-Locked Liquidity Deposit", status: "TBD", verified: false },
        { name: "Contract Address Verification on Explorers", status: "TBD", verified: false },
        { name: "Community Launch Town Hall Event", status: "TBD", verified: false },
      ]
    },
    {
      phaseNumber: "04",
      title: "Phase 4: Ecosystem Growth & Kingdom Governance",
      timeframe: "Post-Launch (TBD)",
      status: "Future Vision",
      statusType: "tbd",
      summary: "Empowering the CK community with collaborative initiatives, community voting, and utility research.",
      items: [
        { name: "Community Ambassador & Creator Initiatives", status: "TBD", verified: false },
        { name: "Decentralized Community Polls & Voting", status: "TBD", verified: false },
        { name: "DEX Analytics & Portfolio Tracking Integrations", status: "TBD", verified: false },
        { name: "Ecosystem Expansion Roadmap 2.0", status: "TBD", verified: false },
      ]
    }
  ]
};
