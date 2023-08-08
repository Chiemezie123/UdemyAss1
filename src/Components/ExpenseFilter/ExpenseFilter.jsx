import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = ({dateProps}) => {

    const runFunction =(e)=>{
        const result = parseInt(e.target.value);
        dateProps(new Date(result,0,1));
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={runFunction}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;