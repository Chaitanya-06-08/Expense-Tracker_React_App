import './ChartBar.css'
const ChartBar = (props) => {
  let barFillHeight='0%'
  if(props.maxValue>0){
    barFillHeight=Math.round((props.value/props.maxValue)*100) + '%'
  }
  return (
    <div className="chartbar">
      <div className="chartbarinner">
        <div className="chartFill" style={{height:barFillHeight}}></div>
      </div>
      <span >{props.month}</span>
    </div>
  );
};
export default ChartBar;
