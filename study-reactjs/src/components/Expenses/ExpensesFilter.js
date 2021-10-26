import React from 'react';
import styled from 'styled-components';

import './ExpensesFilter.css';

const FilterDiv = styled.div`
  color: white;
  padding: 0 1rem;

  &:label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  &:select {
    font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }
`;

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    //console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
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