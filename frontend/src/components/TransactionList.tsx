import React from 'react';
import type { Transaction } from '../types';
import { shortenAddress, formatDate } from '../utils/helpers';

interface TransactionListProps {
    transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
    if (transactions.length === 0) {
        return (
            <section className="animate-slide-up animation-delay-200">
                <div className="mb-5">
                    <h2 className="text-2xl font-bold mb-1">Lịch sử giao dịch</h2>
                    <p className="text-text-muted text-sm">Được bảo vệ bởi IOTA blockchain</p>
                </div>
                <div className="bg-bg-card border border-border rounded-lg p-5 shadow-custom min-h-[200px]">
                    <div className="flex flex-col items-center justify-center py-16 px-5 text-text-muted">
                        <div className="mb-4 opacity-50">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <circle cx="32" cy="32" r="32" fill="#f3f4f6" opacity="0.1" />
                                <path
                                    d="M32 20V44M20 32H44"
                                    stroke="#9ca3af"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <p>Chưa có giao dịch nào</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="animate-slide-up animation-delay-200">
            <div className="mb-5">
                <h2 className="text-2xl font-bold mb-1">Lịch sử giao dịch</h2>
                <p className="text-text-muted text-sm">Được bảo vệ bởi IOTA blockchain</p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-5 shadow-custom">
                {transactions.map((tx) => {
                    const shortHash = `${tx.blockchainTxHash.slice(0, 8)}...${tx.blockchainTxHash.slice(-6)}`;
                    const shortRecipient =
                        tx.to.length > 20 ? shortenAddress(tx.to, 10) : tx.to;

                    return (
                        <div
                            key={tx.id}
                            className="flex justify-between items-center p-5 bg-bg-secondary border border-border rounded-md mb-3 last:mb-0 transition-custom cursor-pointer hover:border-primary hover:translate-x-1 hover:shadow-[0_5px_20px_rgba(99,102,241,0.2)] animate-slide-up"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap font-semibold mb-1">
                                    <span>→ {shortRecipient}</span>
                                    <span className="inline-flex items-center gap-1 bg-success/10 text-success px-2 py-1 rounded text-[11px] font-semibold">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path
                                                d="M3 6L5 8L9 4"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        Verified
                                    </span>
                                </div>
                                <div className="text-[13px] text-text-muted">{formatDate(tx.timestamp)}</div>
                                <div className="text-[13px] text-text-muted">{tx.description}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-danger mb-1">
                                    -${tx.amount.toFixed(2)}
                                </div>
                                <div
                                    className="text-[11px] text-text-muted font-mono"
                                    title={tx.blockchainTxHash}
                                >
                                    TX: {shortHash}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
