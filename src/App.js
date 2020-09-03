import React, { useState, useEffect } from "react";
import { IconButton, Button, TextField } from "@material-ui/core";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import "firebase/firestore";
import db from "./firebase";

import Message from "./components/Message";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(null);

  // useEffect(() => {
  //   setUsername(prompt("Please enter your name"));
  // }, []);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snaphot) => {
        setMessages(
          snaphot.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }))
        );
      });
  }, []);
  const addMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: username,
    });

    setInput("");
  };
  const signin = (e) => {
    setUsername(e);
  };
  return (
    <div className="App ">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100"
        alt=""
      />
      <h1>SergeMessenger</h1>
      {!username ? (
        <Login parentCallback={signin}></Login>
      ) : (
        <div>
          <form className="app__form">
            <TextField
              className="app__input"
              id="standard-basic"
              type="text"
              label="Write a Message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <IconButton
              className="app__button"
              type="submit"
              variant="contained"
              color="primary"
              disabled={!input}
              onClick={addMessage}
            >
              <SendIcon></SendIcon>
            </IconButton>
          </form>

          <FlipMove>
            {messages.map(({ id, data }) => (
              <Message key={id} username={username} message={data}></Message>
            ))}
          </FlipMove>
        </div>
      )}
    </div>
  );
}

export default App;
