import React, { useState, createContext } from "react";
export const DashboardContext = createContext();
export const DashboardProvider = (props) => {
  const [chat, setChat] = useState();
  return (
    <div>
      <DashboardContext.Provider value={[chat, setChat]}>
        {props.children}
      </DashboardContext.Provider>
    </div>
  );
};
