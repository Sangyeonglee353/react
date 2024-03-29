import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
// import { useState } from 'react';

function ExpenseItem(props) {
  // function clickHandler() {}
  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluted by React!');

  // // let title = props.title;

  // const clickHandler = () => {
  //   // title = "Updated!";
  //   setTitle("Updated");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
