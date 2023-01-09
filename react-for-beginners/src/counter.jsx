import Button from './Button';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("call an api");
  useEffect(() => {
    console.log("CALL THE API...");
  },[]);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  },[keyword]);
  useEffect(() => {
    console.log("I run when'counter' changes.");
  },[counter]);
  return (
    <div>
      <input
        value={keyword}
        placeholder="Search here..."
        onChange = {onChange}
        type="text"
        >

      </input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default Counter;
