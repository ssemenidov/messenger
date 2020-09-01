import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";

import "./App.css";
import Message from "./components/Message";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["gfdgf", "gfdgfd"]);
  const [username, setUsername] = useState("unsigned user");
  const addMessage = (e) => {
    e.preventDefault();
    setMessages([input, ...messages]);
    setInput("");
  };
  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);
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
