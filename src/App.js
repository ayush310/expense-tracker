import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 500,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 8000, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 4000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Desk (Wooden)',
    amount: 18000,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Chair (Wooden)',
    amount: 2000,
    date: new Date(2021, 5, 14),
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;