module bank_transaction_ledger::bank_transaction {
    use iota::object::{Self, UID};
    use iota::tx_context::{Self, TxContext};
    use iota::transfer;
    use iota::event;
    use std::string::{Self, String};

    public struct Transaction has key, store {
        id: UID,
        from_account: String,
        to_account: String,
        amount: u64,
        timestamp: u64,
        transaction_id: String,
        description: String,
    }

    public struct TransactionLedger has key {
        id: UID,
        owner: address,
    }

    public struct TransactionRecorded has copy, drop {
        transaction_id: String,
        from_account: String,
        to_account: String,
        amount: u64,
        timestamp: u64,
    }

    public entry fun create_ledger(ctx: &mut TxContext) {
        let ledger = TransactionLedger {
            id: object::new(ctx),
            owner: tx_context::sender(ctx),
        };
        transfer::share_object(ledger);
    }

    public entry fun record_transaction(
        _ledger: &mut TransactionLedger,
        from_account: vector<u8>,
        to_account: vector<u8>,
        amount: u64,
        timestamp: u64,
        transaction_id: vector<u8>,
        description: vector<u8>,
        ctx: &mut TxContext
    ) {
        let from_str = string::utf8(from_account);
        let to_str = string::utf8(to_account);
        let tx_id_str = string::utf8(transaction_id);
        let desc_str = string::utf8(description);

        let transaction = Transaction {
            id: object::new(ctx),
            from_account: from_str,
            to_account: to_str,
            amount,
            timestamp,
            transaction_id: tx_id_str,
            description: desc_str,
        };

        // Phát event
        event::emit(TransactionRecorded {
            transaction_id: tx_id_str,
            from_account: from_str,
            to_account: to_str,
            amount,
            timestamp,
        });

        // Chuyển transaction object cho sender
        transfer::public_transfer(transaction, tx_context::sender(ctx));
    }

    public fun get_transaction_details(transaction: &Transaction): (String, String, u64, u64, String) {
        (
            transaction.from_account,
            transaction.to_account,
            transaction.amount,
            transaction.timestamp,
            transaction.transaction_id
        )
    }
}
