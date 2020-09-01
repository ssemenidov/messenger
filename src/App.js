import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import "./App.css";
import Message from "./components/Message";

import firebase from "firebase";
import "firebase/firestore";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "alex", text: "hey" },
    { username: "danil", text: "What's Up" },
  ]);
  const [username, setUsername] = useState("unsigned user");

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snaphot) => {
        setMessages(snaphot.docs.map((doc) => doc.data()));
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
  return (
    <div className="App">
      <h1>Messanger</h1>
      <form action="">
        <TextField
          id="standard-basic"
          type="text"
          label="Write a Message"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!input}
          onClick={addMessage}
        >
          Send
        </Button>
      </form>

      <ul>
        {messages.map((message) => (
          <Message username={username} message={message}></Message>
        ))}
      </ul>
    </div>
  );
}

export default App;
