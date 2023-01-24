import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "../Users/AddUser.module.css";
import { useState, useRef } from "react";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState(); // Error 상태 관리

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // 1. [유효성 검사]_공백여부
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
        // 각 에러별 제목과 메시지 설정
      setError({
        title: "Invlaid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // 2. [유효성 검사]_나이가 음수 여부
    if (+enteredUserAge < 0) {
        // 각 에러별 제목과 메시지 설정
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge); // 배열에 값 업데이트
    // console.log(enteredUsername, enteredAge);

    // 3. 값 초기화
    // setEnteredUsername("");
    // setEnteredAge("");

    // 가능
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    // 불가(const 상수이므로)
    // enteredName = "";
    // enteredUserAge = "";
  };

  // 에러 없애기
  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
