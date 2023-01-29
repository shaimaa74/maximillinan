import ExpenseForm from "./ExpenseForm/ExpenseForm";
import { useState } from "react";
import "./AddExpense.css";

const AddExpense = (props) => {
  const [viewForm, setViewForm] = useState(false);

  const viewFormHandler = () => {
    setViewForm(true);
  };
  const saveExpenseData = (data) => {
    const newExpenseData = {
      ...data,
      id: Math.random.toString()
    };

    props.onAddNewExpense(newExpenseData);
    setViewForm(false);
  };

  const stopEditing = () => {
    setViewForm(false);
  };

  return (
    <div className="new-expense">
      {!viewForm && <button onClick={viewFormHandler}>Add New Expense</button>}
      {viewForm && (
        <ExpenseForm
          onSaveData={saveExpenseData}
          onCancel={stopEditing}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default AddExpense;
