import React from 'react';
import type { Transaction } from '../types';
import { formatDate } from '../utils/helpers';

interface SuccessModalProps {
    transaction: Transaction | null;
    onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ transaction, onClose }) => {
    if (!transaction) return null;

    return (
        <div className="fixed inset-0 bg-bg-primary/95 backdrop-blur-lg flex items-center justify-center z-[1001] p-5">
            <div className="bg-bg-card border border-border rounded-lg p-10 max-w-lg w-full text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-modal-slide-up">
                <div className="mb-5 animate-scale-in animation-delay-200">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto">
                        <circle cx="32" cy="32" r="32" fill="#10b981" opacity="0.1" />
                        <path
                            d="M20 32L28 40L44 24"
                            stroke="#10b981"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2.5">Giao dịch thành công!</h3>
                <p className="text-text-secondary mb-5">Giao dịch đã được ghi lại trên blockchain</p>
                <div className="bg-bg-secondary border border-border rounded-lg p-5 my-5 text-left">
                    <div className="flex justify-between py-2.5 border-b border-border gap-2.5">
                        <span className="text-text-muted text-sm flex-shrink-0">Người nhận:</span>
                        <span className="text-text-primary font-semibold text-sm text-right break-all">
                            {transaction.to}
                        </span>
                    </div>
                    <div className="flex justify-between py-2.5 border-b border-border gap-2.5">
                        <span className="text-text-muted text-sm flex-shrink-0">Số tiền:</span>
                        <span className="text-text-primary font-semibold text-sm text-right">
                            ${transaction.amount.toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between py-2.5 border-b border-border gap-2.5">
                        <span className="text-text-muted text-sm flex-shrink-0">Thời gian:</span>
                        <span className="text-text-primary font-semibold text-sm text-right">
                            {formatDate(transaction.timestamp)}
                        </span>
                    </div>
                    <div className="flex justify-between py-2.5 border-b border-border gap-2.5">
                        <span className="text-text-muted text-sm flex-shrink-0">Mã giao dịch:</span>
                        <span className="text-text-primary font-semibold text-sm text-right break-all">
                            {transaction.id}
                        </span>
                    </div>
                    <div className="flex justify-between py-2.5 gap-2.5">
                        <span className="text-text-muted text-sm flex-shrink-0">Blockchain TX:</span>
                        <span className="text-text-primary font-semibold text-sm text-right break-all">
                            {transaction.blockchainTxHash}
                        </span>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="bg-bg-secondary text-text-primary border-2 border-border px-8 py-3 rounded-lg font-semibold transition-custom hover:border-primary hover:text-primary"
                >
                    Đóng
                </button>
            </div>
        </div>
    );
};
