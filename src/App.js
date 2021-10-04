//https://github.com/academind/react-complete-guide-code/tree/05-rendering-lists-conditional-content

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1', title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e2', title: "New Desk", amount: 500.0, date: new Date(2021, 3, 15) },
  { id: 'e3', title: "Toilet Paper", amount: 14.55, date: new Date(2021, 2, 25) },
  { id: 'e4', title: "Ink", amount: 94.77, date: new Date(2021, 4, 1) },
];

function App() {

const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

const addExpenseHandler = expense => {
  setExpenses((prevExpenses) => {
    return [expense, ... prevExpenses];
  });
};


  return (
    <div className="App">
      <h1>Main App.js</h1>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
