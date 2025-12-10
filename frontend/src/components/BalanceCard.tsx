import React from 'react';
import { formatCurrency } from '../utils/helpers';

interface BalanceCardProps {
    balance: number;
    accountNumber: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ balance, accountNumber }) => {
    return (
        <section className="animate-slide-up">
            <div className="relative bg-gradient-to-br from-primary to-secondary p-10 rounded-lg shadow-card overflow-hidden">
                {/* Rotating background effect */}
                <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-spin-slow"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-5">
                        <span className="text-sm opacity-90 font-medium">Số dư khả dụng</span>
                        <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">
                            <span className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></span>
                            <span>IOTA Testnet</span>
                        </div>
                    </div>
                    <div className="text-5xl font-bold mb-2.5">
                        <span className="text-3xl opacity-80">$</span>
                        <span>{formatCurrency(balance)}</span>
                    </div>
                    <div className="text-sm opacity-90 font-mono">
                        Account: <span>{accountNumber}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
