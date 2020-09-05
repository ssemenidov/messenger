import React, { useState, useEffect } from "react";
import { IconButton, TextField, Container } from "@material-ui/core";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import "firebase/firestore";
import db from "./firebase";

import Message from "./components/Message";
import Login from "./components/Login";
import Chat from "./components/Chat";
import "./App.css";

function App() {
  const [username, setUsername] = useState(null);
  const signin = (e) => {
    setUsername(e);
  };
  return (
    <div className="App ">
      <Container>
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100"
          alt=""
        />
        <h1>SergeMessenger</h1>
        {!username ? (
          <Login parentCallback={signin}></Login>
        ) : (
          <Chat username={username}></Chat>
        )}
      </Container>
    </div>
  );
}

export default App;
