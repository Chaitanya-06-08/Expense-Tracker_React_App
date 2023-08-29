import ExpenseItem from "./ExpenseItem";
import './FilteredExpenses.css'
const FilteredExpenses = (props) => {
  if (props.items.length ===0) return <h2>No Expenses Found</h2>;
  else {
    return (
      <div>
        {props.items.map((expense_item) => {
          return (
            <ExpenseItem
              key={expense_item.id}
              details={expense_item}
            ></ExpenseItem>
          );
        })}
      </div>
    );
  }
};

export default FilteredExpenses;
