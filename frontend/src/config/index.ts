import type { AppConfig } from '../types';

export const CONFIG: AppConfig = {
    network: 'testnet',
    packageId: '', // Will be filled after deployment
    moduleName: 'bank_transaction',
    ledgerId: '', // Will be filled after creating ledger
};

export const INITIAL_BALANCE = 10000.00;
