import ExpenseItem from "./Components/Expenses/ExpenseItem";
import "./App.css";
import Card from './Components/UI/Card';
import NewExpenses from "./Components/NewExpenses/NewExpenses";
import ExpensesFilter from "./Components/ExpenseFilter/ExpenseFilter";
import { useState } from "react";
function App() {


  
 
  
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expensee, setexpensee] = useState(expenses);

  const addExpenseHandler = expenser => {
    setexpensee((prev)=> [...prev, expenser]);
    console.log(expenser)
  };

const test = expensee.map(expense => expense);
console.log("test", test)
  // const ExpenseArray =

  const datePicker =(freshDate)=>{
    setexpensee(prev=>prev.filter((exp)=>{
      return exp.date.getFullYear() === freshDate.getFullYear()}))
  }
  return (
      <Card>
          <div>
     
            <NewExpenses onAddExpense={addExpenseHandler}/>
         
            <div className='expenses'>
            <ExpensesFilter dateProps={datePicker}/> 

            { expensee.map((expense,index) =>{
    return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} index={index}/>
  })}
            </div>
        </div>
      </Card>
  );
}

export default App;