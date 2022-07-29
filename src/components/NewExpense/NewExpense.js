import React from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"
const NewExpense = (props) => {
  const saveExpenseDataTransfer = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: new Date().getTime().toString(),
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataTransfer} />
    </div>
  )
}

export default NewExpense
