import React, { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import "./ExpenseItem.css"

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  const click_handler = () => {
    setTitle("Update")
    console.log(title)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1>{title}</h1>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={click_handler}>Change Title</button>
      </div>
    </Card>
  )
}

export default ExpenseItem
