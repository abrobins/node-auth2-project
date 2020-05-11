import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import PrivateRoute from "./components/PrivateRoute";
import Users from "./components/Users";
import styled from "styled-components";

import Signup from "./components/Signup";

const Button = styled.div`
  width: 15%;
  margin: 0 auto;
  border-radius: 1.5rem;
  background-color: #ffc357;
  box-shadow: 2px 2px #d88144;
  color: #084f93;
  font-size: 1.2rem;
  font-weight: bold;
`;

function App() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>User List App</h1>
        </header>
        <nav>
          <Button onClick={logout}>Logout</Button>
        </nav>

        <Route path="/signin" component={Signin} />

        <Route path="/signup" component={Signup} />

        <PrivateRoute exact path="/" component={Users} />
      </div>
    </Router>
  );
}

export default App;
