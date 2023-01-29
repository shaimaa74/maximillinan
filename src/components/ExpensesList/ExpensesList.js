import "./ExpensesList.css";
import { useState } from "react";
import ExpensesItems from "../ExpensesItems/ExpensesItems";
import Card from "../shared/card/card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpensesList = (props) => {
  const [year, setYear] = useState("2023");

  const getSelectedYear = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredYear = props.list.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses-list">
      <ExpensesFilter
        selected={year}
        onYearSelected={getSelectedYear}
      ></ExpensesFilter>
      <ExpensesItems items={filteredYear}></ExpensesItems>
    </Card>
  );
};

export default ExpensesList;
