import React from 'react';
import { shortenAddress } from '../utils/helpers';

interface HeaderProps {
    walletConnected: boolean;
    walletAddress: string | null;
    onConnectWallet: () => void;
}

export const Header: React.FC<HeaderProps> = ({
    walletConnected,
    walletAddress,
    onConnectWallet,
}) => {
    return (
        <header className="bg-bg-secondary/60 backdrop-blur-xl border border-border rounded-lg p-5 md:px-8 mb-8 shadow-custom">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="animate-float">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="url(#gradient1)" />
                            <path
                                d="M16 8L22 12V20L16 24L10 20V12L16 8Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                            <defs>
                                <linearGradient id="gradient1" x1="0" y1="0" x2="32" y2="32">
                                    <stop offset="0%" stopColor="#6366f1" />
                                    <stop offset="100%" stopColor="#8b5cf6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        BlockBank
                    </h1>
                </div>
                <div>
                    {walletConnected && walletAddress ? (
                        <div className="flex items-center gap-3 bg-success/10 px-5 py-2.5 rounded-lg border border-success/30">
                            <span className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></span>
                            <span className="font-mono text-success font-semibold">
                                {shortenAddress(walletAddress)}
                            </span>
                        </div>
                    ) : (
                        <button
                            onClick={onConnectWallet}
                            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold transition-custom hover:-translate-y-0.5 hover:shadow-lg shadow-[0_4px_15px_rgba(99,102,241,0.3)]"
                        >
                            Connect Wallet
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};
