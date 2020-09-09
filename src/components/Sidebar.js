import React, { setState, useEffect, useContext, useState } from "react";
import clsx from "clsx";
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

import { AppContext } from "../AppContext";
function Sidebar() {
  const [chats, setChats] = useState([]);
  const [username, SetUsername] = useContext(AppContext);

  useEffect(() => {
    db.collection(username.uid).onSnapshot((snaphot) => {
      setChats(
        snaphot.docs.map((doc) => ({
          chatId: doc.data().id,
        }))
      );
    });
  }, []);
  const list = (anchor) => (
    <div className="list" role="presentation">
      <List>
        {["Profile", "Contacts", "Groups"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <div>
      <React.Fragment key="left">
        <Drawer class="drawer" variant="persistent" anchor="left" open={true}>
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default Sidebar;
