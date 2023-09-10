import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

const AppCSS = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <AppCSS>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </AppCSS>
  );
};

export default App;
