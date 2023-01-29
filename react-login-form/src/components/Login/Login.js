import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // Context 추가
  const ctx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    // 초기값
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    // 초기값
    valu: "",
    isValid: null,
  });

  // useRef 추가
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // useEffect() 사용: email과 password값이 변경된 경우 유효성 검사 실행
  // 객체 디스트럭처링
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // Cleanup 함수 적용: 불필요한 유효성 검사 횟수를 줄임
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(
        // enteredEmail.includes("@") && enteredPassword.trim().length > 6
        // emailState.isValid && passwordState.isValid
        emailIsValid && passwordIsValid // 변경됨!
      );
    }, 500);

    return () => {
      console.log("Cleanup");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]); // 변경됨!

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    // action을 디스패치
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // 기존 코드
    // setFormIsValid(
    //   // event.target.value.includes("@") && enteredPassword.trim().length > 6
    //   event.target.value.includes("@") && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    // action을 디스패치
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // 기존 코드
    // setFormIsValid(
    //   // event.target.value.trim().length > 6 && enteredEmail.includes("@")
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    // props.onLogin(emailState.value, enteredPassword);
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
