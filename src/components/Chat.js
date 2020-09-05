import React, { useState, useEffect } from "react";
import { IconButton, TextField, Container } from "@material-ui/core";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import "firebase/firestore";
import db from "../firebase";

import Message from "./Message";
import "./Chat.css";

function Chat(props) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

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
      username: props.username,
    });

    setInput("");
  };

  return (
    <div className="Chat ">
      <Container>
        <form className="chat__form">
          <TextField
            className="chat__input"
            id="standard-basic"
            type="text"
            label="Write a Message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="chat__button"
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
            <Message
              key={id}
              username={props.username}
              message={data}
            ></Message>
          ))}
        </FlipMove>
      </Container>
    </div>
  );
}

export default Chat;
