import React, { useContext } from 'react';

//transactions
import { Transaction } from './Transaction.js'

//global state
import { GlobalContext } from '../context/GlobalState.js'

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    return(
        <div>
            <h3> Transaction History</h3>
        <ul className="list">
            {transactions.map(transaction =>
                <Transaction key={transaction.id} transaction={transaction} />
                )}
        </ul>
        </div>
    )
}