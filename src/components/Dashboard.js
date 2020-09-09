import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function Dashboard() {
  const style = {
    width: `70%`,
    marginLeft: "auto",
  };
  return (
    <div style={style}>
      <Sidebar></Sidebar>
      <Chat></Chat>
    </div>
  );
}

export default Dashboard;
