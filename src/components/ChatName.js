import React, { useEffect, useState, useContext } from "react";
import db from "../firebase";
import { DashboardContext } from "./DashboardContext";
function ChatName(props) {
  const [chat, setChat] = useState();
  const [chat_c, setChat_c] = useContext(DashboardContext);
  useEffect(() => {
    db.collection("chats")
      .doc(props.chat.id)
      .onSnapshot((doc) => setChat(doc.data().name));
  }, []);
  const ChangeChat = () => {
    setChat_c({ id: props.chat.id, name: chat });
  };

  return (
    <div>
      <h2 onClick={ChangeChat}>{chat}</h2>
    </div>
  );
}

export default ChatName;
