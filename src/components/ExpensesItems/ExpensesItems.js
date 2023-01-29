import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesItems = (props) => {
  let expensesContent = <p>No expenses for this year</p>;
  if (props.items.length === 0) {
    return expensesContent;
  }

  return (
    <div>
      {props.items.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </div>
  );
};

export default ExpensesItems;
