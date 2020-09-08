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
      <Container>
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100"
          alt=""
        />
        <h1>SergeMessenger</h1>
        <AppContext.Provider value={[username, setUsername]}>
          {!username ? <Login></Login> : <Dashboard></Dashboard>}
        </AppContext.Provider>
      </Container>
    </div>
  );
}

export default App;
