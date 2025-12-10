import { useState, useEffect } from 'react';
import { IotaClient } from '@iota/iota-sdk/client';

interface WalletState {
    connected: boolean;
    address: string | null;
    connecting: boolean;
    error: string | null;
}

export const useWallet = () => {
    const [walletState, setWalletState] = useState<WalletState>({
        connected: false,
        address: null,
        connecting: false,
        error: null,
    });

    const [client, setClient] = useState<IotaClient | null>(null);

    // Initialize IOTA client
    useEffect(() => {
        const initClient = () => {
            try {
                const iotaClient = new IotaClient({
                    url: 'https://api.testnet.iota.cafe',
                });
                setClient(iotaClient);
            } catch (error) {
                console.error('Failed to initialize IOTA client:', error);
            }
        };

        initClient();
    }, []);

    const connectWallet = async () => {
        setWalletState(prev => ({ ...prev, connecting: true, error: null }));

        try {
            // Check if wallet extension exists
            if (typeof window === 'undefined' || !(window as any).iota) {
                throw new Error('IOTA Wallet extension not found. Please install it first.');
            }

            // Request wallet connection
            const wallet = (window as any).iota;

            // Request accounts
            const accounts = await wallet.requestAccounts();

            if (!accounts || accounts.length === 0) {
                throw new Error('No accounts found in wallet');
            }

            const address = accounts[0];

            setWalletState({
                connected: true,
                address,
                connecting: false,
                error: null,
            });

            return address;
        } catch (error: any) {
            const errorMessage = error.message || 'Failed to connect wallet';

            setWalletState({
                connected: false,
                address: null,
                connecting: false,
                error: errorMessage,
            });

            throw error;
        }
    };

    const disconnectWallet = () => {
        setWalletState({
            connected: false,
            address: null,
            connecting: false,
            error: null,
        });
    };

    const getBalance = async (address: string) => {
        if (!client) {
            throw new Error('IOTA client not initialized');
        }

        try {
            const balance = await client.getBalance({
                owner: address,
            });
            return balance;
        } catch (error) {
            console.error('Failed to get balance:', error);
            throw error;
        }
    };

    return {
        walletState,
        client,
        connectWallet,
        disconnectWallet,
        getBalance,
    };
};
