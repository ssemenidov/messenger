import React, { useState, useContext } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { DashboardProvider } from "./DashboardContext";

function Dashboard() {
  const style = {
    width: `70%`,
    marginLeft: "auto",
  };

  return (
    <div style={style}>
      <DashboardProvider>
        <Sidebar></Sidebar>
        <Chat></Chat>
      </DashboardProvider>
    </div>
  );
}

export default Dashboard;
