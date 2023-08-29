import React, { useState } from "react";

import ChartWrapper from "../Chart/ChartWrapper";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./ExpenseItemsWrapper.css";
import FilteredExpenses from "./FilteredExpenses";

function ExpenseItemsWrapper(props) {
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === props.year;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        onChangingYear={props.changeYear}
        YearList={props.YearList}
        selectedYear={props.year}
      />
      <ChartWrapper filteredExpenses={filteredExpenses} />
      <FilteredExpenses items={filteredExpenses} />
    </div>
  );
}
export default ExpenseItemsWrapper;
