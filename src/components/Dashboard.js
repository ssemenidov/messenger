import React, { useState } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function Dashboard() {
  const [chat, setChat] = useState();
  const style = {
    width: `70%`,
    marginLeft: "auto",
  };

  return (
    <div style={style}>
      <Sidebar></Sidebar>
      <Chat chat={chat}></Chat>
    </div>
  );
}

export default Dashboard;
