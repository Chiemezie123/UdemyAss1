import React from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';

function ExpenseList({filterDateValue}) {
    if(filterDateValue.length === 0){
        return <h2 style={{color:"#fff", fontSize:"32px"}}> no expenses made here !</h2>
    }
  return (
    <div>
       { filterDateValue.map((expense,index) =>{
    return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} index={index}/>
  })}
    </div>
  )
}

export default ExpenseList;
