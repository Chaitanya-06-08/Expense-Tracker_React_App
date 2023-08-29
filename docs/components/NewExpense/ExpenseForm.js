import { useState } from "react";
import "./ExpenseForm.css";
function Expensefrom(props) {
  const SubmitHandler = (event) => {
    event.preventDefault(); //  NOTE: This method call is important to prevent the default browser behaviour which is reloading of page when clicked on button type="submit"
    const newExpenseData = {
      id: Math.random(),
      title: EnteredTitle,
      amount: parseInt(EnteredAmount),
      date: new Date(EnteredDate),
    };
    props.onSaveData(newExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onCancelButtonClick();
  };

  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  const TitleSetter = (event) => {
    setEnteredTitle(event.target.value);
  };
  const AmountSetter = (event) => {
    setEnteredAmount(event.target.value);
  };
  const DateSetter = (event) => {
    setEnteredDate(event.target.value);
  };

  // const ButtonPressEffect = (event) => {
  //   event.target.style.boxShadow = "1px 1px  white inset";
  //   setTimeout(() => {
  //     event.target.style.boxShadow = "1px 1px  white";
  //   }, 60);
  //   // SubmitHandler();
  // };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="expense-description ">
        <div className="form-item">
          <label htmlFor="expense-title">Title</label>
          <br />
          <input
            type="text"
            onChange={TitleSetter}
            name="expense-title"
            id="expense-title"
            value={EnteredTitle}
          />
          <br />
        </div>
        <div className="form-item">
          <label htmlFor="expense-amount">Amount</label>
          <br />
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="expense-amount"
            id="expense-amount"
            onChange={AmountSetter}
            value={EnteredAmount}
          />
          <br />
        </div>
        <div className="form-item">
          <label htmlFor="expense-date">Date</label>
          <br />
          <input
            type="date"
            name="expense-date"
            id="expense-date"
            onInput={DateSetter}
            value={EnteredDate}
            min="2019-01-01"
          />
        </div>
      </div>
      <div className="Buttons">
        <button onClick={props.onCancelButtonClick}>Cancel</button>
        <button type="submit" onClick={SubmitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default Expensefrom;
