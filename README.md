# BlisterB

BlisterB is a decentralized application (DApp) built on the NEON EVM blockchain where users can submit their sneaker ideas and others can fund those ideas. This README will guide you through the setup and usage of blisterB.

## Table of Contents

- [Smart Contract Overview](#smart-contract-overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## Smart Contract Overview

The blisterB DApp utilizes a Solidity smart contract to manage sneaker proposals and funding. Here's a brief overview of the main components of the smart contract:

- **ShoeProposal Contract**: This contract defines the structure of a sneaker proposal, including its ID, creator, title, description, image link, total funds, contributors, and status.
- **createShoeProposal**: Function to create a new sneaker proposal.
- **fundProposal**: Function for users to fund a sneaker proposal.
- **getProposal**: Function to retrieve details of a specific sneaker proposal.
- **getAllProposalIds**: Function to retrieve all proposal IDs.
- **isContributor**: Internal function to check if an address has already contributed to a proposal.

## Features

- **Submit Sneaker Ideas**: Users can submit their sneaker ideas by providing a title, description, and image link.
- **Fund Sneaker Proposals**: Users can fund sneaker proposals they are interested in.
- **Track Funding**: The smart contract tracks the total funds raised for each proposal and the contributors.
- **Active Proposals**: Only active proposals can be funded. Once funded, a proposal becomes inactive.

## Getting Started

### Prerequisites

- Node.js installed on your local machine.
- Ethereum wallet such as MetaMask set up with some test Ether for interacting with the DApp.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mohitchandel/BlisterB.git
```

2. Navigate to the project directory:

```bash
cd BlisterB
```

3. Install dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Access the DApp through your web browser at `http://localhost:3000`.
3. Connect your EVM wallet (e.g., MetaMask) to the DApp.
4. Explore existing sneaker proposals, fund the ones you like, or create your own proposal.

## NEON EVM

- Website: https://neonevm.org/
- Docs: https://docs.neonevm.org/docs/quick_start
