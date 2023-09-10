import styled from "styled-components";

const LoginCSS = styled.div`
  width: 100vw;
  height: 100vh;
  header {
    width: 90vw;
    height: 10vh;
    background-color: lightcoral;
    margin: 0 auto;
  }
  .logo {
    width: 50vw;
    height: 10vh;
    background-color: lightblue;
    margin: 0 auto;
  }
  main {
    width: 90vw;
    height: 100vh;
    background-color: lightgreen;
    margin: 0 auto;
  }
  .title {
    width: 50vw;
    font-size: 24px;
    font-weight: bold;
    border: 1px solid black;
    background-color: lightyellow;
    margin: 0 auto;
  }
  ul {
    list-style-type: none;
  }
`;
const Login = () => {
  return (
    <LoginCSS>
      <header>
        <div className="logo"></div>
      </header>
      <main>
        <section className="title">로그인</section>
        <ul>
          <li>
            <label htmlFor="userID">아이디</label>
            <input type="text" id="userID" />
          </li>
          <li>
            <label htmlFor="userPassword">비밀번호</label>
            <input type="password" id="userPassword" />
          </li>
        </ul>
      </main>
    </LoginCSS>
  );
};

export default Login;
