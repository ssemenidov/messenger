import React, { useState, UseContext, useContext } from "react";
import { Container } from "@material-ui/core";
import Login from "./components/Login";
import "./App.css";
import Dashboard from "./components/Dashboard";

import { AppContext } from "./AppContext";
function App() {
  const [username, SetUsername] = useContext(AppContext);
  return (
    <div className="App ">
      {!username ? <Login></Login> : <Dashboard></Dashboard>}
      {/* <Dashboard></Dashboard> */}
    </div>
  );
}

export default App;
