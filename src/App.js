import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses";

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
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
