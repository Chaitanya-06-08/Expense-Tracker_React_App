import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const FilterHandler = (event) => {
    props.onChangingYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={FilterHandler} value={props.selectedYear}>
          {props.YearList.map((year) => {
            return <option value={year}>{year}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
