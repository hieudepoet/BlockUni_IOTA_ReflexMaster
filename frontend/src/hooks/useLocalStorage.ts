import { useState, useEffect } from 'react';
import { Transaction } from '../types';
import { INITIAL_BALANCE } from '../config';

const STORAGE_KEYS = {
    TRANSACTIONS: 'blockbank_transactions',
    BALANCE: 'blockbank_balance',
};

export const useLocalStorage = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [balance, setBalance] = useState<number>(INITIAL_BALANCE);

    // Load from localStorage on mount
    useEffect(() => {
        try {
            const savedTransactions = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
            const savedBalance = localStorage.getItem(STORAGE_KEYS.BALANCE);

            if (savedTransactions) {
                setTransactions(JSON.parse(savedTransactions));
            }

            if (savedBalance) {
                setBalance(parseFloat(savedBalance));
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
        }
    }, []);

    // Save transactions to localStorage
    const saveTransactions = (newTransactions: Transaction[]) => {
        try {
            localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(newTransactions));
            setTransactions(newTransactions);
        } catch (error) {
            console.error('Error saving transactions:', error);
        }
    };

    // Save balance to localStorage
    const saveBalance = (newBalance: number) => {
        try {
            localStorage.setItem(STORAGE_KEYS.BALANCE, newBalance.toString());
            setBalance(newBalance);
        } catch (error) {
            console.error('Error saving balance:', error);
        }
    };

    // Add new transaction
    const addTransaction = (transaction: Transaction) => {
        const newTransactions = [transaction, ...transactions];
        saveTransactions(newTransactions);
    };

    // Update balance
    const updateBalance = (amount: number) => {
        const newBalance = balance - amount;
        saveBalance(newBalance);
    };

    return {
        transactions,
        balance,
        addTransaction,
        updateBalance,
    };
};
