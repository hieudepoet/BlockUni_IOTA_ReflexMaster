import { useState } from 'react';
import { Eye, EyeOff, Send, History, CreditCard, Settings, Bell, Shield, TrendingUp, Wallet, CheckCircle } from 'lucide-react';
import { useCurrentAccount, useConnectWallet, useDisconnectWallet } from '@iota/dapp-kit';
import { ConnectButton } from '@iota/dapp-kit';

function App() {
  const [showBalance, setShowBalance] = useState(false);
  const currentAccount = useCurrentAccount();
  const { mutate: connect } = useConnectWallet();
  const { mutate: disconnect } = useDisconnectWallet();

  const balance = '125,000.50';
  const accountNumber = "****  ****  ****  7842";

  const shortenAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-dark-700 bg-dark-800/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <Wallet className="w-6 h-6 text-dark-900" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-gradient-gold">BlockBank</h1>
                <p className="text-xs text-gray-500">Web3 Banking Platform</p>
              </div>
            </div>

            {/* Wallet Connect Button */}
            <div className="wallet-button-container">
              <ConnectButton
                connectText="Connect Wallet"
                className="!bg-gold-500 hover:!bg-gold-600 !text-dark-900 !font-semibold !rounded-lg !px-6 !py-2.5"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Wallet Status Banner */}
        {currentAccount && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-green-400 font-semibold">Wallet Connected</p>
              <p className="text-sm text-gray-400">
                Connected to IOTA Testnet • Address: {shortenAddress(currentAccount.address)}
              </p>
            </div>
          </div>
        )}

        {!currentAccount && (
          <div className="mb-6 p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center space-x-3">
            <Bell className="w-5 h-5 text-gold-400 flex-shrink-0 animate-pulse" />
            <div className="flex-1">
              <p className="text-gold-400 font-semibold">Connect your IOTA wallet to get started</p>
              <p className="text-sm text-gray-400">Click "Connect Wallet" to link your IOTA wallet and access all features</p>
            </div>
          </div>
        )}

        {/* Welcome Section */}
        <div className="mb-8 p-6 bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl border border-gold-500/20">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Welcome back, {currentAccount ? shortenAddress(currentAccount.address) : 'Ikaris'}
              </h2>
              <p className="text-gray-400">Manage your digital assets with blockchain security</p>
            </div>
            <Bell className="w-6 h-6 text-gold-400" />
          </div>
        </div>

        {/* Balance Card */}
        <div className="mb-8 p-8 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-2xl border border-gold-500/30 shadow-gold relative overflow-hidden">
          <div className="absolute inset-0 shimmer-effect animate-shimmer opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Total Balance</p>
                <div className="flex items-center space-x-3">
                  <h3 className="text-4xl font-bold text-gradient-gold">
                    {showBalance ? `$${balance}` : '****'}
                  </h3>
                  <button
                    onClick={() => setShowBalance(!showBalance)}
                    className="p-2 hover:bg-dark-600 rounded-lg transition-colors"
                  >
                    {showBalance ? <EyeOff className="w-5 h-5 text-gold-400" /> : <Eye className="w-5 h-5 text-gold-400" />}
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 mb-1">Account</p>
                <p className="text-lg font-mono text-gold-400">{accountNumber}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-gray-400">Secured by IOTA Blockchain</span>
              </div>
              {currentAccount && (
                <div className="text-xs text-gray-500">
                  Network: Testnet
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button
            disabled={!currentAccount}
            className="p-6 bg-dark-800 hover:bg-dark-700 border border-gold-500/20 hover:border-gold-500/40 rounded-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-8 h-8 text-gold-400 mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-white font-semibold mb-1">Transfer</p>
            <p className="text-xs text-gray-500">Send money</p>
          </button>

          <button className="p-6 bg-dark-800 hover:bg-dark-700 border border-dark-600 rounded-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-gold-500/20 text-gold-400 text-[10px] font-semibold rounded">SOON</div>
            <CreditCard className="w-8 h-8 text-gray-500 mb-3" />
            <p className="text-gray-400 font-semibold mb-1">Cards</p>
            <p className="text-xs text-gray-600">Manage cards</p>
          </button>

          <button className="p-6 bg-dark-800 hover:bg-dark-700 border border-dark-600 rounded-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-gold-500/20 text-gold-400 text-[10px] font-semibold rounded">SOON</div>
            <TrendingUp className="w-8 h-8 text-gray-500 mb-3" />
            <p className="text-gray-400 font-semibold mb-1">Invest</p>
            <p className="text-xs text-gray-600">Grow wealth</p>
          </button>

          <button className="p-6 bg-dark-800 hover:bg-dark-700 border border-dark-600 rounded-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-gold-500/20 text-gold-400 text-[10px] font-semibold rounded">SOON</div>
            <Settings className="w-8 h-8 text-gray-500 mb-3" />
            <p className="text-gray-400 font-semibold mb-1">Settings</p>
            <p className="text-xs text-gray-600">Preferences</p>
          </button>
        </div>

        {/* About & Guide Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* About */}
          <div className="p-6 bg-dark-800 border border-gold-500/20 rounded-xl">
            <h3 className="text-xl font-bold text-gradient-gold mb-4">About BlockBank</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              BlockBank is a Web3 banking platform built on IOTA blockchain. This is a learning project focused on smart contract development and blockchain integration.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                <span className="text-gray-300">Immutable transaction history</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                <span className="text-gray-300">Decentralized architecture</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                <span className="text-gray-300">Smart contract powered</span>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="p-6 bg-dark-800 border border-gold-500/20 rounded-xl">
            <h3 className="text-xl font-bold text-gradient-gold mb-4">How to Use</h3>
            <div className="space-y-4">
              <div className="flex space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/20 text-gold-400 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <p className="text-white font-semibold">Connect Your Wallet</p>
                  <p className="text-sm text-gray-400">Click "Connect Wallet" to link your IOTA wallet</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/20 text-gold-400 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <p className="text-white font-semibold">Explore Features</p>
                  <p className="text-sm text-gray-400">Try the transfer feature (mock data for demo)</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/20 text-gold-400 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <p className="text-white font-semibold">View Transactions</p>
                  <p className="text-sm text-gray-400">All transactions are recorded on blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="p-6 bg-dark-800 border border-gold-500/20 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
            <button className="text-gold-400 hover:text-gold-300 text-sm font-semibold flex items-center space-x-1">
              <span>View All</span>
              <History className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center py-12">
            <div className="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <History className="w-8 h-8 text-gray-600" />
            </div>
            <p className="text-gray-400">No transactions yet</p>
            <p className="text-sm text-gray-600 mt-1">
              {currentAccount ? 'Start by making your first transfer' : 'Connect your wallet to view transactions'}
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>⚠️ This is a demo platform for learning purposes</p>
          <p className="mt-1">All data is mocked • Smart contracts in development</p>
        </div>
      </div>
    </div>
  );
}

export default App;
