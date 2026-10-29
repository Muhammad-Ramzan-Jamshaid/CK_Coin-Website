/**
 * CK Coin - Tokenomics Data
 * Adheres strictly to Section 1.2 & FR-06:
 * Confirmed project facts: 1,000,000,000 Supply, 0% Taxes, Fair Launch.
 */

export const tokenomicsData = {
  summary: {
    tokenName: "CK Coin",
    tokenSymbol: "CK",
    network: "To be announced",
    standard: "To be announced",
    totalSupply: "1,000,000,000",
    circulatingSupply: "1,000,000,000",
    contractAddress: null, // Will display verified copy badge when deployed
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
      id: "supply",
      label: "Total Supply",
      value: "1,000,000,000",
      status: "Confirmed",
      isTba: false,
      hint: "Fixed supply cap of 1 Billion tokens"
    },
    {
      id: "tax",
      label: "Buy / Sell Tax",
      value: "0% Tax",
      status: "Confirmed",
      isTba: false,
      hint: "Zero hidden transaction taxes or transfer fees"
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
      id: "distribution",
      label: "Allocation Model",
      value: "100% Fair Launch",
      status: "Confirmed",
      isTba: false,
      hint: "Zero secret private seed sales or VC allocations"
    },
    {
      id: "liquidity",
      label: "Liquidity Commitment",
      value: "Locked on Launch",
      status: "Mandatory Policy",
      isTba: false,
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
      title: "100% Fair Public Launch",
      desc: "Zero private seed rounds or VC pre-allocations. Fair public liquidity ensures all community members start equally."
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
