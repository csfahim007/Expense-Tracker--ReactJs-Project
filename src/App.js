import React, {useState} from "react";
import Expenses from "./components/Expenses.js";

import NewExpense from "./NewExpense/NewExpense.js";


let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 1400,
    date: new Date(2023, 4, 28),
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 377,
    date: new Date(2023, 4, 20),
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 15000,
    date: new Date(2023, 4, 2),
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 6250,
    date: new Date(2023, 4, 12)
  }
] 


function App(){

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) => {
        const updatedExpense = [...expenses, expense]  //Adding new expense item at the end
      
        //  const updatedExpense = [ expense, ...expenses,] : this is Adding at the front line
        setExpenses(updatedExpense);
    }

      return (
        <div> 
          
          <h2>Lets get started</h2>
          <NewExpense  onAddExpense={ addExpenseHandler }/>
          <Expenses item={expenses}/>

        </div>
      );
}

export default App;