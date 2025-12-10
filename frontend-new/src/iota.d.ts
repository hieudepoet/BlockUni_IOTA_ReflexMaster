// Type declarations for IOTA Wallet
declare global {
    interface Window {
        iota?: {
            requestAccounts: () => Promise<string[]>;
            getAccounts: () => Promise<string[]>;
            disconnect: () => Promise<void>;
            on: (event: string, callback: (...args: any[]) => void) => void;
            off: (event: string, callback: (...args: any[]) => void) => void;
        };
    }
}

export { };
