import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Expense.css"

function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.text[0].title}
        amount={props.text[0].amount}
        date={props.text[0].date}
      />
      <ExpenseItem
        title={props.text[1].title}
        amount={props.text[1].amount}
        date={props.text[1].date}
      />
      <ExpenseItem
        title={props.text[2].title}
        amount={props.text[2].amount}
        date={props.text[2].date}
      />
      <ExpenseItem
        title={props.text[3].title}
        amount={props.text[3].amount}
        date={props.text[3].date}
      />
    </Card>
  )
}

export default Expense
