import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredDate: "",
  //   enteredAmount: "",
  // })
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")

  const title_change_handler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // })
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: e.target.value,
    //   }
    // })
    setEnteredTitle(e.target.value)
  }

  const amount_change_handler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // })
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: e.target.value,
    //   }
    // })
    setEnteredAmount(e.target.value)
  }

  const date_change_handler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // })
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: e.target.value,
    //   }
    // })
    setEnteredDate(e.target.value)
  }

  const form_handler = (e) => {
    e.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
    props.onSaveExpenseData(expenseData)
  }

  return (
    <form onSubmit={form_handler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={title_change_handler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amount_change_handler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={date_change_handler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
