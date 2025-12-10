export interface Transaction {
    id: string;
    from: string;
    to: string;
    amount: number;
    description: string;
    timestamp: number;
    blockchainTxHash: string;
    status: 'pending' | 'completed' | 'failed';
}

export interface WalletState {
    connected: boolean;
    address: string | null;
    balance: number;
}

export interface AppConfig {
    network: 'testnet' | 'mainnet';
    packageId: string;
    moduleName: string;
    ledgerId: string;
}
