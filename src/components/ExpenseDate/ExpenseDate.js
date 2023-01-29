import "./ExpenseDate.css";
function ExpenseDate(props) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const month = props.date.toLocaleString("eng-US", { month: "long" });
  const day = props.date.toLocaleString("eng-US", { day: "numeric" });
  const year = props.date.toLocaleString("eng-US", { year: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
