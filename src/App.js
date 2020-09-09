import React, { useState, createContext } from "react";
import { Container } from "@material-ui/core";
import Login from "./components/Login";
import "./App.css";
import Dashboard from "./components/Dashboard";
export const AppContext = createContext();
function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App ">
      <AppContext.Provider value={[username, setUsername]}>
        {!username ? <Login></Login> : <Dashboard></Dashboard>}
        <Dashboard></Dashboard>
      </AppContext.Provider>
    </div>
  );
}

export default App;
