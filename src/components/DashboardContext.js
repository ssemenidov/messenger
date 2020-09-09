import React, { useState, createContext } from "react";
export const DashboardContext = createContext();
export const DashboardProvider = (props) => {
  const [chat, setChat] = useState("Oy2huo9IQUiFpgwPs7ck");
  return (
    <div>
      <DashboardContext.Provider value={[chat, setChat]}>
        {props.children}
      </DashboardContext.Provider>
    </div>
  );
};
