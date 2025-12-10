import { useState } from 'react';
import { Header } from './components/Header';
import { BalanceCard } from './components/BalanceCard';
import { TransferForm } from './components/TransferForm';
import { TransactionList } from './components/TransactionList';
import { Loading } from './components/Loading';
import { SuccessModal } from './components/SuccessModal';
import { useWallet } from './hooks/useWallet';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { Transaction } from './types';
import { generateTransactionId, generateBlockchainHash, sleep } from './utils/helpers';

function App() {
  const { walletState, connectWallet } = useWallet();
  const { transactions, balance, addTransaction, updateBalance } = useLocalStorage();
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [successTransaction, setSuccessTransaction] = useState<Transaction | null>(null);

  const handleConnectWallet = async () => {
    try {
      setLoadingMessage('Đang kết nối ví...');
      setLoading(true);
      await connectWallet();
    } catch (error) {
      alert('Không thể kết nối ví. Vui lòng thử lại!');
    } finally {
      setLoading(false);
    }
  };

  const handleTransfer = async (recipient: string, amount: number, description: string) => {
    try {
      setLoadingMessage('Đang xử lý giao dịch...');
      setLoading(true);

      // Create transaction
      const transaction: Transaction = {
        id: generateTransactionId(),
        from: walletState.address || 'User****1234',
        to: recipient,
        amount,
        description,
        timestamp: Date.now(),
        blockchainTxHash: generateBlockchainHash(),
        status: 'completed',
      };

      // Simulate blockchain recording
      await sleep(2000);

      // Update state
      addTransaction(transaction);
      updateBalance(amount);

      // Show success modal
      setSuccessTransaction(transaction);
    } catch (error) {
      console.error('Transfer error:', error);
      alert('Giao dịch thất bại. Vui lòng thử lại!');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setSuccessTransaction(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-5">
      <Header
        walletConnected={walletState.connected}
        walletAddress={walletState.address}
        onConnectWallet={handleConnectWallet}
      />

      <main className="grid gap-8">
        <BalanceCard balance={balance} accountNumber="****1234" />
        <TransferForm onSubmit={handleTransfer} balance={balance} />
        <TransactionList transactions={transactions} />
      </main>

      {loading && <Loading message={loadingMessage} />}
      <SuccessModal transaction={successTransaction} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
