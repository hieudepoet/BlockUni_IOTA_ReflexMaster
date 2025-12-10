# BlockBank - Blockchain Banking dApp on IOTA

## 📋 Project Description

BlockBank is a decentralized application (dApp) built on the IOTA testnet using Move smart contracts. The application simulates a digital banking system with the feature of recording transaction history on the blockchain, ensuring the immutability and transparency of transaction data.

## 🎯 Purpose

To solve the problem of **transaction history alteration** in traditional banking systems by using blockchain technology to store transaction history immutably.

## ✨ Features

- 🏦 **Digital Banking Interface**: Modern, user-friendly interface
- 💸 **Transfers**: Simulates bank transfer functionality
- ⛓️ **Blockchain Recording**: Records all transactions to the IOTA blockchain
- 📜 **Transaction History**: Displays verified transaction history on the blockchain
- 🔐 **Immutability**: Transaction data cannot be altered after being recorded on the chain
- 🎨 **Premium UI/UX**: Beautiful design with dark mode, glassmorphism, and animations

## 🏗️ Architecture

### Smart Contract (Move)

- **Module**: `bank_transaction`
- **Main Functions**:

- `create_ledger()`: Initializes the transaction ledger

- `record_transaction()`: Records transactions to the blockchain

- `get_transaction_details()`: Retrieves transaction information

### Frontend
- **HTML5**: Website structure
- **CSS3**: Styling with modern design patterns
- **JavaScript**: Logic for processing transactions and blockchain interaction

## 📦 Package & Transaction Information

### Package ID
```
[PACKAGE_ID_WILL_BE_HERE_AFTER_DEPLOYMENT]
```

### Transaction Hash (Deployment)
```
[TX_HASH_WILL_BE_HERE_AFTER_DEPLOYMENT]

```

### Ledger Object ID
```
[LEDGER_ID_WILL_BE_HERE_AFTER_CREATION]

```

### Network
- **Network**: IOTA Testnet
- **RPC Endpoint**: https://api.testnet.iota.cafe

## 🚀 Deployment Guide

### 1. Install IOTA CLI

```bash
# Download and install IOTA CLI
# See instructions at: https://docs.iota.org/developer/getting-started/install-iota
```

### 2. Network Configuration

```bash
# Switch to IOTA testnet
iota client switch --env testnet
# Check wallet address
iota client active-address
```

### 3. Build Smart Contract

```bash
# Navigate to project directory
cd d:\Web3\iota\BlockUni_IOTA_ReflexMaster

# Build Move package
iota move build
```

### 4. Deploy Smart Contract

```bash
# Deploy to testnet
iota client publish --gas-budget 100000000

# Save Package ID from deploy result
```

### 5. Create Ledger Object

```bash
# Call the create_ledger function
iota client call --package [PACKAGE_ID] --module bank_transaction --function create_ledger --gas-budget 10000000

# Save the Ledger Object ID
```

### 6. Update Frontend Config

Open the `app.js` file and update:

```javascript
const CONFIG = { 
NETWORK: 'testnet', 
PACKAGE_ID: '[YOUR_PACKAGE_ID]', 
MODULE_NAME: 'bank_transaction', 
LEDGER_ID: '[YOUR_LEDGER_ID]',
};
```

## 💻 Frontend Implementation Guide

### Method 1: Using Live Server (VS Code)

1. Install the "Live Server" extension in VS Code

2. Right-click on `index.html`

3. Select "Open with Live Server"

### Method 2: Using Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Access: http://localhost:8000
```

### Method 3: Using Node.js HTTP Server

```bash
# Install http-server
npm install -g http-server

# Run server

http-server -p 8000

# Access: http://localhost:8000
```

## 📱 Usage Guide

1. **Connect Wallet**: Click "Connect Wallet" to connect your IOTA wallet
2. **Enter Information**:

- Recipient Account

- Amount to Transfer (or click "$100" for quick selection)

- Transfer Description (optional)
3. **Transfer**: Click "Transfer" to complete the transaction
4. **Confirmation**: The transaction will be recorded on the blockchain and displayed in the history

## 🔧 Directory Structure

```
BlockUni_IOTA_ReflexMaster/

├── Move.toml # Move package configuration
├── sources/

│ └── bank_transaction.move # Smart contract
├── index.html # Frontend HTML

├── styles.css # Styling
├── app.js # Application logic
└── README.md # Documentation
```

## 🧪 Testing

### Testing Smart Contracts

```bash
# Build to test for errors
iota move build

# Test on testnet
iota client call --package [PACKAGE_ID] --module bank_transaction --function record_transaction --args [LEDGER_ID] "[FROM]" "[TO]" 100000000 [TIMESTAMP] "[TX_ID]" "[DESC]" --gas-budget 10000000
```

### Testing Frontend

1. Open Developer Console (F12)

2. Check logs in Console
3. Test the transfer functionality
4. Verify that transactions are stored in localStorage

## 🔐 Security

- ✅ Smart contracts use `entry` functions for security
- ✅ Validate input data
- ✅ Use `shared object` for ledgers
- ✅ Event emission for tracking
- ✅ Immutable transaction records

## 🌟 Advanced features (Future)

- [ ] IOTA Wallet SDK integration
- [ ] Query transactions from blockchain
- [ ] Multi-signature transactions
- [ ] Transaction filters and search
- [ ] Export transaction history
