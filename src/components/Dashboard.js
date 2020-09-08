import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Chat></Chat>
    </div>
  );
}

export default Dashboard;
