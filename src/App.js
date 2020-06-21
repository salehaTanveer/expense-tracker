import React from 'react';
import './App.css';
import { Header } from './components/Header.js'
import { Balance } from './components/Balance.js'
import { AccountSummary } from './components/AccountSummary.js'
import { TransactionHistory } from './components/TransactionHistory.js'
import { AddTransaction } from './components/AddTransaction.js'

//Global Provider
import { GlobalProvider } from './context/GlobalState.js'

function App() {
  return (
    <GlobalProvider>
      <hr />
      <Header />
      <hr />
      <div className="container">
        <Balance />
        <hr />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction /> 
      </div>
    </GlobalProvider>
  );
}

export default App;
