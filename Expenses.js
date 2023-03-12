import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from "react";

const Expenses = (props) => {
  const [currentFilterYear, setCurrentFilterYear] = useState('2019');
  const filteredExpenses = props.items.filter(item=>item.date.getFullYear() == currentFilterYear);
  // added this line to filter

  const receiveFilter = filterYear =>{
    setCurrentFilterYear(filterYear);
  }
  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={currentFilterYear} onReceiveFilter={receiveFilter}
         expenses={props.items}/>
        {/*here now I write filteredExpenses instead of props.title*/filteredExpenses.map(item=>(
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
