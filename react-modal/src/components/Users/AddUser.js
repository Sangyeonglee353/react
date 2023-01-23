import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "../Users/AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(); // Error 상태 관리

  const submitHandler = (event) => {
    event.preventDefault();
    // 1. [유효성 검사]_공백여부
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        // 각 에러별 제목과 메시지 설정
      setError({
        title: "Invlaid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // 2. [유효성 검사]_나이가 음수 여부
    if (+enteredAge < 0) {
        // 각 에러별 제목과 메시지 설정
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge); // 배열에 값 업데이트
    // console.log(enteredUsername, enteredAge);

    // 3. 값 초기화
    setEnteredUsername("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // 에러 없애기
  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername} // 4. 값 반영
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge} // 4. 값 반영
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
