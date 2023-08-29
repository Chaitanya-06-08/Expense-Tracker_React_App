import React from "react";
import ExpenseItemsWrapper from "./components/Expenses/ExpenseItemsWrapper";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [Expenses, setExpenses] = useState([
    // {
    //   id: "e4",  // Demo Item
    //   title: "Desk ",
    //   amount: 500,
    //   date: new Date(2022, 8, 11),
    // },
  ]);

  const [Year, setYear] = useState("2023");

  const [YearList, setYearList] = useState(["2022", "2023"]);

  const UpdatingExpenses = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });

    setYear(newExpenseData.date.getFullYear().toString());

    setYearList((prevList) => {
      let Updated = prevList.filter((year) => {
        return newExpenseData.date.getFullYear().toString() !== year;
      });
      Updated.push(newExpenseData.date.getFullYear().toString());
      return Updated;
    });
  };

  return (
    <React.Fragment>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          border: "2px solid white",
          backgroundColor: "rgb(181, 71, 255)",
        }}
      >
        Welcome.Click On the Button below to add new Expenses
      </h1>
      <NewExpense onGettingNewExpense={UpdatingExpenses} />
      <ExpenseItemsWrapper
        expenses={Expenses}
        year={Year}
        changeYear={setYear}
        YearList={YearList}
      ></ExpenseItemsWrapper>
    </React.Fragment>
  );
}

export default App;
