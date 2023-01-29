import ExpensesList from "./components/ExpensesList/ExpensesList";
import "./styles.css";
import AddExpense from "./components/AddExpense/AddExpanse";
import { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "fun",
    amount: 168.22,
    date: new Date(2022, 12, 5)
  },
  {
    id: "e2",
    title: "electricity",
    amount: 200.22,
    date: new Date(2022, 8, 22)
  },
  {
    id: "e3",
    title: "phone bill",
    amount: 250,
    date: new Date(2021, 11, 9)
  },
  {
    id: "e4",
    title: "car fix",
    amount: 50,
    date: new Date(2021, 6, 17)
  }
];

export default function App() {
  const [expensesList, setExpensesList] = useState(expenses);
  const addNewData = (data) => {
    setExpensesList((prevExpenses) => {
      return [data, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <AddExpense onAddNewExpense={addNewData}></AddExpense>
      <ExpensesList list={expensesList}></ExpensesList>
    </div>
  );
}
