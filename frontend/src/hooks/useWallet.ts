import { useState, useCallback } from 'react';
import { WalletState } from '../types';

export const useWallet = () => {
    const [walletState, setWalletState] = useState<WalletState>({
        connected: false,
        address: null,
        balance: 0,
    });

    const connectWallet = useCallback(async () => {
        try {
            // Check if IOTA wallet is available
            if (typeof (window as any).iota === 'undefined') {
                throw new Error('Please install IOTA Wallet extension!');
            }

            // Request wallet connection
            const accounts = await (window as any).iota.requestAccounts();

            if (accounts && accounts.length > 0) {
                setWalletState({
                    connected: true,
                    address: accounts[0],
                    balance: 0, // Would fetch from blockchain in production
                });

                return accounts[0];
            }
        } catch (error) {
            console.error('Wallet connection error:', error);
            throw error;
        }
    }, []);

    const disconnectWallet = useCallback(() => {
        setWalletState({
            connected: false,
            address: null,
            balance: 0,
        });
    }, []);

    return {
        walletState,
        connectWallet,
        disconnectWallet,
    };
};
