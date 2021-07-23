import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

const expenses = [
  { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { title: "New Desk", amount: 500.0, date: new Date(2021, 3, 15) },
  { title: "Toilet Paper", amount: 14.55, date: new Date(2021, 2, 25) },
  { title: "Ink", amount: 94.77, date: new Date(2021, 4, 1) },
];

function App() {
  return (
    <div className="App">
      <h1>Main App.js</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
