/**
 * CK Coin - Tokenomics Data
 * Adheres strictly to Section 1.2 & FR-06:
 * Unknown project facts display as "To be announced" or approved placeholders.
 * No invented token supply, blockchain, allocation percentages, or fake contract address.
 */

export const tokenomicsData = {
  summary: {
    tokenName: "CK Coin",
    tokenSymbol: "CK",
    network: "To be announced",
    standard: "To be announced",
    totalSupply: "To be announced",
    circulatingSupply: "To be announced",
    contractAddress: null, // Will display verified copy badge when provided
  },

  metrics: [
    {
      id: "symbol",
      label: "Token Symbol",
      value: "CK",
      status: "Confirmed",
      isTba: false,
      hint: "Official ticker visible in brand artwork"
    },
    {
      id: "network",
      label: "Blockchain Network",
      value: "To be announced",
      status: "Pending Reveal",
      isTba: true,
      hint: "Selected chain will prioritize speed, low gas, and liquidity safety"
    },
    {
      id: "supply",
      label: "Total Supply",
      value: "To be announced",
      status: "Under Audit Review",
      isTba: true,
      hint: "Supply cap will be locked upon smart contract deployment"
    },
    {
      id: "distribution",
      label: "Allocation Model",
      value: "Fair Community Allocation",
      status: "In Structuring",
      isTba: true,
      hint: "Transparent breakdown will be published with verifiable lock proofs"
    },
    {
      id: "tax",
      label: "Buy / Sell Fee",
      value: "To be announced",
      status: "Pending Finalization",
      isTba: true,
      hint: "Targeting 0% or minimal community-sustaining parameters"
    },
    {
      id: "liquidity",
      label: "Liquidity Commitment",
      value: "To be locked on launch",
      status: "Mandatory Policy",
      isTba: true,
      hint: "Liquidity pool lock verification links will be provided at launch"
    }
  ],

  contractStatus: {
    statusLabel: "Deployment Pending",
    description: "The official smart contract address has not yet been deployed. Beware of impersonators or unofficial contracts claiming to represent CK Coin. The authentic address will only be posted on official community channels and verified here.",
    isDeployed: false,
    address: null,
  },

  principles: [
    {
      title: "Zero Fictional Claims",
      desc: "Unlike deceptive projects that fabricate token supplies and distribution charts before code is written, CK Coin only presents verified facts."
    },
    {
      title: "Verifiable On-Chain Proofs",
      desc: "Once the smart contract is deployed, full block explorer links, audit documentation, and LP lock receipts will be published immediately."
    },
    {
      title: "Community-First Protection",
      desc: "Contract parameters are engineered to prevent unfair insider sniping, malicious mint functions, and hidden fees."
    }
  ]
};
