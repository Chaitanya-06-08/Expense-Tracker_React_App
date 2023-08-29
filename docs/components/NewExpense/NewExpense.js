import "./ExpenseForm.css";
import "./NewExpense.css";
import Expenseform from "./ExpenseForm";
import { useState } from "react";
function NewExpense(props) {
  const [FormDisplayStatus, setFormDisplayStatus] = useState(false);
  const HideFormHandler = () => {
    setFormDisplayStatus(false);
  };
  const ShowFormHandler = (event) => {
    setFormDisplayStatus(true);
  };

  let ShowForm = (
    <Expenseform
      onSaveData={props.onGettingNewExpense}
      onCancelButtonClick={HideFormHandler}
    />
  );

  let addExpenseButton = (
    <div className="toggle-button ">
      <button onClick={ShowFormHandler}>Add New Expense</button>
    </div>
  );

  return (
    <div className="form-container">
      {!FormDisplayStatus && addExpenseButton}
      {FormDisplayStatus && ShowForm}
    </div>
  );
}
export default NewExpense;
