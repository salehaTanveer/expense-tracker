import React , {createContext , useReducer } from 'react';

//import App Reducer
import AppReducer from './AppReducer.js';


//initial state
const initialState = {
    transactions: []
}

//Global Context 
export const GlobalContext = createContext(initialState);

//provider for Global Context 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions

        // Delete Existing Transaction 
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction 
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