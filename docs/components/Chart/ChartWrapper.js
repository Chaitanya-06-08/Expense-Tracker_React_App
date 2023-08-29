import ChartBar from "./ChartBar";
import "./ChartWrapper.css";
function ChartWrapper(props) {
  // const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Octo","Nov","Dec"];
  const chartData = [
    {
      month: "Jan",
      value: 0,
    },
    {
      month: "Feb",
      value: 0,
    },
    {
      month: "Mar",
      value: 0,
    },
    {
      month: "Apr",
      value: 0,
    },
    {
      month: "May",
      value: 0,
    },
    {
      month: "Jun",
      value: 0,
    },
    {
      month: "Jul",
      value: 0,
    },
    {
      month: "Aug",
      value: 0,
    },
    {
      month: "Sep",
      value: 0,
    },
    {
      month: "Oct",
      value: 0,
    },
    {
      month: "Nov",
      value: 0,
    },
    {
      month: "Dec",
      value: 0,
    },
  ];
  props.filteredExpenses.map((expense) => {
    let monthIndex = expense.date.getMonth();
    chartData[monthIndex].value += expense.amount;
  });
  const valuesArray= chartData.map( datapoint =>{
    return datapoint.value 
  })
  let maxValue = Math.max(...valuesArray);
  return (
    <div className="chart-wrapper">
      {chartData.map((datapoint) => (
        <ChartBar
          key={datapoint.month}
          month={datapoint.month}
          maxValue={maxValue}
          value={datapoint.value}
        />
      ))}
    </div>
  );
}

export default ChartWrapper;
