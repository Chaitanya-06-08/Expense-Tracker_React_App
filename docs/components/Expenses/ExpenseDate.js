import './ExpenseDate.css'

function ExpenseDate(props){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return (
        <div className="date">
            <p className='date-item'>{month[props.date.getMonth()]}<br></br>{props.date.getDate()}</p>
            <h3 className='date-item'>{props.date.getFullYear()}</h3>
        </div>
    );
}
export default ExpenseDate;