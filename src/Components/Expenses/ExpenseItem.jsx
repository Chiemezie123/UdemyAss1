import React from 'react';
import ExpenseData from './ExpenseData';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div key={props.index} className='expense-item'>
      <ExpenseData date={props.date} />
      <div className='expense-item__description'>
        <h2 key={props.index} >{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;