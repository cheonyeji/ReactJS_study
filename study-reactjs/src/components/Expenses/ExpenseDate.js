import React from 'react';
import styled from 'styled-components'

const DateDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const MonthDiv = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
}`;
const YearDiv = styled.div`
  font-size: 0.75rem;
}`;
const DayDiv = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
}`;

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <DateDiv>
      <MonthDiv>{month}</MonthDiv>
      <YearDiv>{year}</YearDiv>
      <DayDiv>{day}</DayDiv>
    </DateDiv>
  );
};

export default ExpenseDate;