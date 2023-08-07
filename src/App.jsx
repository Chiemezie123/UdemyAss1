import ExpenseItem from "./Components/Expenses/ExpenseItem";
import "./App.css";
import Card from './Components/UI/Card';
import NewExpenses from "./Components/NewExpenses/NewExpenses";
import ExpensesFilter from "./Components/ExpenseFilter/ExpenseFilter";
function App() {


  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

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

  const ExpenseArray = expenses.map((expense) =>{
    return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
  })

  const datePicker =(freshDate)=>{
    const date = freshDate;
    console.log(date)
  }
  return (
      <Card>
          <div>
     
            <NewExpenses onAddExpense={addExpenseHandler}/>
         
            <div className='expenses'>
            <ExpensesFilter dateProps={datePicker}/> 
            {ExpenseArray}
            </div>
        </div>
      </Card>
  );
}

export default App;