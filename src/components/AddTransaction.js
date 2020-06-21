import React, { useState, useContext } from 'react';

//Global Context
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [description, setDescription] =useState('')
    const [transactionAmount, setTransactionAmount] =useState('')

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);

    }

    return(
        <div>
            <h3> Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" placeholder="Details of Transaction" 
                            id="description"    value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" placeholder="Dollar Value of Transaction"
                            id="transactionamount"  value={transactionAmount} 
                            onChange={(e) => setTransactionAmount(e.target.value)} />
                </div>
                <button className="btn"> Add Transaction</button>
            </form>
        </div>
    )
}