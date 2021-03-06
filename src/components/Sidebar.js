import React, { setState, useEffect, useContext, useState } from "react";
import "./Sidebar.css";
import {
  Button,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  makeStyles,
  Divider,
} from "@material-ui/core";
import "firebase/firestore";
import db from "../firebase";
import ChatName from "./ChatName";
import { AppContext } from "../AppContext";
import { DashboardContext } from "./Dashboard";
function Sidebar() {
  const [chats, setChats] = useState([]);
  const [chat_c, setChat_c] = useContext(DashboardContext);
  const [username, SetUsername] = useContext(AppContext);

  useEffect(() => {
    db.collection("chats").onSnapshot((snaphot) => {
      setChats(
        snaphot.docs.map((doc) => ({
          id: doc.id,
        }))
      );
    });
  }, []);
  return (
    <div>
      <Drawer class="drawer" variant="persistent" anchor="left" open={true}>
        <div className="list" role="presentation">
          <List>
            {chats.map((chat) => (
              <ChatName chat={chat}></ChatName>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}

export default Sidebar;
