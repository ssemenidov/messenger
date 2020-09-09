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
function Sidebar() {
  const [chats, setChats] = useState([]);
  const [username, SetUsername] = useContext(AppContext);

  useEffect(() => {
    db.collection("userchats").onSnapshot((snaphot) => {
      setChats(
        snaphot.docs.map((doc) => ({
          id: doc.data().id,
        }))
      );
    });
  }, []);
  console.log(chats);
  return (
    <div>
      <React.Fragment key="left">
        <Drawer class="drawer" variant="persistent" anchor="left" open={true}>
          <div className="list" role="presentation">
            <List>
              {chats.map((chat) => (
                <ListItem button key={chat}>
                  <ChatName chat={chat}></ChatName>
                </ListItem>
              ))}
            </List>
            <Divider />
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default Sidebar;
