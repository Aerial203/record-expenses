import React, { useState } from "react"
import Expense from "./components/Expense/Expense"
import NewExpense from "./components/NewExpense/NewExpense"

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 296.67,
    date: new Date(2022, 6, 27),
  },
  {
    id: 2,
    title: "Toilet Paper",
    amount: 20.67,
    date: new Date(2022, 6, 25),
  },
  {
    id: 3,
    title: "Paper",
    amount: 20.67,
    date: new Date(2022, 5, 27),
  },
  {
    id: 4,
    title: "Laptop",
    amount: 2000.67,
    date: new Date(2022, 5, 9),
  },
]

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
  const add_expense_handler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={add_expense_handler} />
      <Expense item={expenses} />
    </div>
  )
}

export default App
