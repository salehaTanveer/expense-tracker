import React , {createContext , useReducer } from 'react';

//import App Reducer
import AppReducer from './AppReducer.js';


//initial state
const initialState = {
    transactions: [
        { id: 1, description: "Project 1 Income", transactionAmount: 10000 },
        { id: 2, description: "Project 2 Income", transactionAmount: 20000 },
        { id: 3, description: "Project 1 Salary", transactionAmount: -5000 },
        { id: 4, description: "Project 2 Salary", transactionAmount: -10000 }
    ]
}

//Global Context 
export const GlobalContext = createContext(initialState);

//provider for Global Context 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions

        // Delete Existing Transaction Action
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );

}