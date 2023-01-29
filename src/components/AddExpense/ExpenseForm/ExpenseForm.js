import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    const expenseItem = {
      title: title,
      amount: amount,
      date: new Date(date)
    };
    props.onSaveData(expenseItem);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-1-1"
            max="2023-12-31"
            value={date}
            onChange={changeDateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
