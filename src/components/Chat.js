import React, { useState, useEffect, useContext } from "react";
import { IconButton, TextField, Container } from "@material-ui/core";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import firebase from "firebase";
import "firebase/firestore";
import db from "../firebase";

import { AppContext } from "../AppContext";
import Message from "./Message";
import "./Chat.css";

function Chat(props) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, SetUsername] = useContext(AppContext);
  useEffect(() => {
    db.collection("chats")
      .doc("Oy2huo9IQUiFpgwPs7ck")
      .collection("Chat")
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
    db.collection("chats").doc("Oy2huo9IQUiFpgwPs7ck").collection("Chat").add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: username.displayName,
    });

    setInput("");
  };

  return (
    <div className="Chat ">
      <Container>
        <h2>Chat Name</h2>
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

        <FlipMove className="flipmove">
          {messages.map(({ id, data }) => (
            <Message
              key={id}
              username={username.displayName}
              message={data}
            ></Message>
          ))}
        </FlipMove>
      </Container>
    </div>
  );
}

export default Chat;
