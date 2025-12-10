import React, { useState, type FormEvent } from 'react';

interface TransferFormProps {
    onSubmit: (recipient: string, amount: number, description: string) => void;
    balance: number;
}

export const TransferForm: React.FC<TransferFormProps> = ({ onSubmit, balance }) => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const amountNum = parseFloat(amount);

        if (amountNum <= 0) {
            alert('Số tiền phải lớn hơn 0!');
            return;
        }

        if (amountNum > balance) {
            alert('Số dư không đủ!');
            return;
        }

        onSubmit(recipient, amountNum, description || 'Chuyển khoản');

        // Reset form
        setRecipient('');
        setAmount('');
        setDescription('');
    };

    const handleQuickAmount = () => {
        setAmount('100');
    };

    return (
        <section className="animate-slide-up animation-delay-100">
            <div className="mb-5">
                <h2 className="text-2xl font-bold mb-1">Chuyển khoản</h2>
                <p className="text-text-muted text-sm">Giao dịch được ghi lại bất biến trên blockchain</p>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-8 shadow-custom">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="recipientAccount" className="block mb-2 font-semibold text-sm text-text-secondary">
                            Tài khoản người nhận
                        </label>
                        <input
                            type="text"
                            id="recipientAccount"
                            placeholder="Nhập số tài khoản hoặc địa chỉ ví"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            required
                            className="w-full px-4 py-3.5 bg-bg-secondary border-2 border-border rounded-lg text-text-primary text-base transition-custom focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                        />
                    </div>

                    <div>
                        <label htmlFor="amount" className="block mb-2 font-semibold text-sm text-text-secondary">
                            Số tiền (USD)
                        </label>
                        <div className="flex items-center gap-2.5">
                            <div className="relative flex-1">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-text-muted pointer-events-none">
                                    $
                                </span>
                                <input
                                    type="number"
                                    id="amount"
                                    placeholder="0.00"
                                    step="0.01"
                                    min="0.01"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    className="w-full pl-10 pr-4 py-3.5 bg-bg-secondary border-2 border-border rounded-lg text-text-primary text-base transition-custom focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleQuickAmount}
                                className="bg-bg-secondary border-2 border-border text-text-secondary px-4 py-2.5 rounded-lg font-semibold transition-custom hover:border-primary hover:text-primary hover:-translate-y-0.5 whitespace-nowrap"
                            >
                                $100
                            </button>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block mb-2 font-semibold text-sm text-text-secondary">
                            Nội dung chuyển khoản
                        </label>
                        <input
                            type="text"
                            id="description"
                            placeholder="Nhập nội dung (tùy chọn)"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-3.5 bg-bg-secondary border-2 border-border rounded-lg text-text-primary text-base transition-custom focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                        />
                    </div>

                    <button
                        type="submit"
                        className="relative w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-lg text-base font-bold transition-custom flex items-center justify-center gap-2.5 shadow-button hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)] active:translate-y-0 overflow-hidden group"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                        <span className="relative">Chuyển khoản</span>
                        <span className="relative">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M4 10H16M16 10L11 5M16 10L11 15"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};
