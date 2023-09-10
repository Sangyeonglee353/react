import React from "react";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function Path() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Path;
