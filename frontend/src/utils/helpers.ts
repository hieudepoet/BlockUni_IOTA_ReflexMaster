export const generateTransactionId = (): string => {
    return 'TXN' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
};

export const generateBlockchainHash = (): string => {
    const chars = '0123456789abcdef';
    let hash = '0x';
    for (let i = 0; i < 64; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
    }
    return hash;
};

export const shortenAddress = (address: string, chars = 4): string => {
    if (!address) return '';
    if (address.length <= chars * 2 + 2) return address;
    return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
};

export const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

export const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
};

export const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
