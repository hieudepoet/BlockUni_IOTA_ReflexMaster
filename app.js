// Configuration
const CONFIG = {
    NETWORK: 'testnet',
    PACKAGE_ID: '', // Will be filled after deployment
    MODULE_NAME: 'bank_transaction',
    LEDGER_ID: '', // Will be filled after creating ledger
};

// State
let state = {
    walletConnected: false,
    walletAddress: null,
    balance: 10000.00,
    transactions: [],
    iotaClient: null,
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadTransactionsFromStorage();
});

function initializeApp() {
    console.log('BlockBank dApp initialized');
    updateUI();
}

function setupEventListeners() {
    // Connect wallet button
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
    
    // Transfer form
    document.getElementById('transferForm').addEventListener('submit', handleTransfer);
    
    // Quick amount button
    document.querySelector('.quick-amount').addEventListener('click', (e) => {
        const amount = e.target.dataset.amount;
        document.getElementById('amount').value = amount;
    });
}

// Wallet Connection
async function connectWallet() {
    try {
        showLoading('Đang kết nối ví...');
        
        // Check if IOTA wallet is available
        if (typeof window.iota === 'undefined') {
            alert('Vui lòng cài đặt IOTA Wallet extension!');
            hideLoading();
            return;
        }
        
        // Request wallet connection
        const accounts = await window.iota.requestAccounts();
        
        if (accounts && accounts.length > 0) {
            state.walletConnected = true;
            state.walletAddress = accounts[0];
            
            // Update UI
            updateWalletUI();
            hideLoading();
            
            console.log('Wallet connected:', state.walletAddress);
        }
    } catch (error) {
        console.error('Wallet connection error:', error);
        hideLoading();
        alert('Không thể kết nối ví. Vui lòng thử lại!');
    }
}

function updateWalletUI() {
    const walletInfo = document.getElementById('walletInfo');
    const shortAddress = state.walletAddress 
        ? `${state.walletAddress.slice(0, 6)}...${state.walletAddress.slice(-4)}`
        : '';
    
    walletInfo.innerHTML = `
        <div class="wallet-connected">
            <span class="pulse-dot"></span>
            <span class="wallet-address">${shortAddress}</span>
        </div>
    `;
}

// Transfer Handler
async function handleTransfer(e) {
    e.preventDefault();
    
    const recipientAccount = document.getElementById('recipientAccount').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value || 'Chuyển khoản';
    
    // Validation
    if (amount <= 0) {
        alert('Số tiền phải lớn hơn 0!');
        return;
    }
    
    if (amount > state.balance) {
        alert('Số dư không đủ!');
        return;
    }
    
    try {
        showLoading('Đang xử lý giao dịch...');
        
        // Create mock transaction data
        const transaction = createMockTransaction(recipientAccount, amount, description);
        
        // Simulate blockchain recording
        await recordTransactionOnChain(transaction);
        
        // Update balance
        state.balance -= amount;
        
        // Add to transaction history
        state.transactions.unshift(transaction);
        saveTransactionsToStorage();
        
        // Update UI
        updateUI();
        
        // Show success modal
        showSuccessModal(transaction);
        
        // Reset form
        document.getElementById('transferForm').reset();
        
        hideLoading();
    } catch (error) {
        console.error('Transfer error:', error);
        hideLoading();
        alert('Giao dịch thất bại. Vui lòng thử lại!');
    }
}

function createMockTransaction(recipient, amount, description) {
    const timestamp = Date.now();
    const txId = generateTransactionId();
    
    return {
        id: txId,
        from: state.walletAddress || 'User****1234',
        to: recipient,
        amount: amount,
        description: description,
        timestamp: timestamp,
        blockchainTxHash: generateBlockchainHash(),
        status: 'completed'
    };
}

async function recordTransactionOnChain(transaction) {
    // Simulate blockchain interaction delay
    await sleep(2000);
    
    // In production, this would call the actual smart contract:
    /*
    if (state.walletConnected && CONFIG.PACKAGE_ID && CONFIG.LEDGER_ID) {
        const tx = new TransactionBlock();
        
        tx.moveCall({
            target: `${CONFIG.PACKAGE_ID}::${CONFIG.MODULE_NAME}::record_transaction`,
            arguments: [
                tx.object(CONFIG.LEDGER_ID),
                tx.pure(Array.from(new TextEncoder().encode(transaction.from))),
                tx.pure(Array.from(new TextEncoder().encode(transaction.to))),
                tx.pure(transaction.amount * 1000000), // Convert to micro units
                tx.pure(transaction.timestamp),
                tx.pure(Array.from(new TextEncoder().encode(transaction.id))),
                tx.pure(Array.from(new TextEncoder().encode(transaction.description))),
            ],
        });
        
        const result = await window.iota.signAndExecuteTransactionBlock({
            transactionBlock: tx,
        });
        
        transaction.blockchainTxHash = result.digest;
    }
    */
    
    console.log('Transaction recorded on blockchain:', transaction);
}

// UI Updates
function updateUI() {
    updateBalanceDisplay();
    updateTransactionList();
}

function updateBalanceDisplay() {
    document.getElementById('balanceAmount').textContent = state.balance.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function updateTransactionList() {
    const listContainer = document.getElementById('transactionList');
    
    if (state.transactions.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="32" fill="#f3f4f6" opacity="0.1"/>
                        <path d="M32 20V44M20 32H44" stroke="#9ca3af" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </div>
                <p>Chưa có giao dịch nào</p>
            </div>
        `;
        return;
    }
    
    const transactionsHTML = state.transactions.map(tx => createTransactionHTML(tx)).join('');
    listContainer.innerHTML = transactionsHTML;
}

function createTransactionHTML(tx) {
    const date = new Date(tx.timestamp);
    const formattedDate = date.toLocaleString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const shortHash = `${tx.blockchainTxHash.slice(0, 8)}...${tx.blockchainTxHash.slice(-6)}`;
    const shortRecipient = tx.to.length > 20 
        ? `${tx.to.slice(0, 10)}...${tx.to.slice(-8)}`
        : tx.to;
    
    return `
        <div class="transaction-item">
            <div class="transaction-info">
                <div class="transaction-recipient">
                    <span>→ ${shortRecipient}</span>
                    <span class="blockchain-verified">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M3 6L5 8L9 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Verified
                    </span>
                </div>
                <div class="transaction-time">${formattedDate}</div>
                <div class="transaction-time">${tx.description}</div>
            </div>
            <div class="transaction-amount">
                <div class="amount-value">-$${tx.amount.toFixed(2)}</div>
                <div class="tx-hash" title="${tx.blockchainTxHash}">TX: ${shortHash}</div>
            </div>
        </div>
    `;
}

// Success Modal
function showSuccessModal(transaction) {
    const modal = document.getElementById('successModal');
    const txDetails = document.getElementById('txDetails');
    
    const date = new Date(transaction.timestamp);
    const formattedDate = date.toLocaleString('vi-VN');
    
    txDetails.innerHTML = `
        <div class="detail-row">
            <span class="detail-label">Người nhận:</span>
            <span class="detail-value">${transaction.to}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Số tiền:</span>
            <span class="detail-value">$${transaction.amount.toFixed(2)}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Thời gian:</span>
            <span class="detail-value">${formattedDate}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Mã giao dịch:</span>
            <span class="detail-value">${transaction.id}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Blockchain TX:</span>
            <span class="detail-value">${transaction.blockchainTxHash}</span>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('successModal').classList.remove('active');
}

// Loading Overlay
function showLoading(message = 'Đang xử lý...') {
    document.getElementById('loadingText').textContent = message;
    document.getElementById('loadingOverlay').classList.add('active');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('active');
}

// Storage
function saveTransactionsToStorage() {
    try {
        localStorage.setItem('blockbank_transactions', JSON.stringify(state.transactions));
        localStorage.setItem('blockbank_balance', state.balance.toString());
    } catch (error) {
        console.error('Storage error:', error);
    }
}

function loadTransactionsFromStorage() {
    try {
        const savedTransactions = localStorage.getItem('blockbank_transactions');
        const savedBalance = localStorage.getItem('blockbank_balance');
        
        if (savedTransactions) {
            state.transactions = JSON.parse(savedTransactions);
        }
        
        if (savedBalance) {
            state.balance = parseFloat(savedBalance);
        }
        
        updateUI();
    } catch (error) {
        console.error('Storage load error:', error);
    }
}

// Utility Functions
function generateTransactionId() {
    return 'TXN' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function generateBlockchainHash() {
    const chars = '0123456789abcdef';
    let hash = '0x';
    for (let i = 0; i < 64; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
    }
    return hash;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Export for debugging
window.BlockBank = {
    state,
    CONFIG,
    connectWallet,
    updateUI
};
