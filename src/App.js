import React, { useState, createContext } from "react";
import { Container } from "@material-ui/core";
import Login from "./components/Login";
import Chat from "./components/Chat";
import "./App.css";
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
          {!username ? <Login></Login> : <Chat></Chat>}
        </AppContext.Provider>
      </Container>
    </div>
  );
}

export default App;
