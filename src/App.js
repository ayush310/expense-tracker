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
  { id: 'e2', title: 'New TV', amount: 8000, date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 4000,
    date: new Date(2022, 1, 28),
  },
  {
    id: 'e4',
    title: 'Desk (Wooden)',
    amount: 18000,
    date: new Date(2020, 5, 12),
  },
  {
    id: 'e5',
    title: 'Chair (Wooden)',
    amount: 2000,
    date: new Date(2020, 5, 14),
  },
  {
    id: 'e6',
    title: 'Car',
    amount: 2000000,
    date: new Date(2019, 11, 4),
  },
  {
    id: 'e7',
    title: 'Headphones',
    amount: 2000,
    date: new Date(2019, 5, 14),
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
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