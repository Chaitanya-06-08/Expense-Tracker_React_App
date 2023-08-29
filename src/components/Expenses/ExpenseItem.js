import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
      <div className="item">
        <ExpenseDate date={props.details.date} />
        <div className="description">
          <h1>{props.details.title}</h1>
          <p className="price">Rs.{props.details.amount}</p>
        </div>
      </div>
  );
}

export default ExpenseItem;
