import React, { useState, createContext } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
export const DashboardContext = createContext();

function Dashboard() {
  const [chat_c, setChat_c] = useState();
  const style = {
    width: `70%`,
    marginLeft: "auto",
  };

  return (
    <div style={style}>
      <DashboardContext.Provider value={[chat_c, setChat_c]}>
        <Sidebar></Sidebar>
        <Chat></Chat>
      </DashboardContext.Provider>
    </div>
  );
}

export default Dashboard;
