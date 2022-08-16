
import React from 'react'
import Expense from './component/Expenses/Expense'
import NewExpense from './component/NewExpenses/NewExpense';



const App = () => {
  
  return (
    <>
      <div className="App">
        <h2>Lets Start</h2>
        <NewExpense/>
        <Expense/>
      </div>
    </>
  );
}

export default App;

