import React, { useState, createContext } from "react";
export const AppContext = createContext();
export const AppProvider = (props) => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <AppContext.Provider value={[username, setUsername]}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};
