import React, { useEffect, useState } from "react";
import db from "../firebase";
function ChatName(props) {
  const [chat, setChat] = useState();
  useEffect(() => {
    db.collection("chats")
      .doc(props.chat.id)
      .onSnapshot((doc) => setChat(doc.data().name));
  }, []);

  return (
    <div>
      <h2>{chat}</h2>
    </div>
  );
}

export default ChatName;
