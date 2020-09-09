import React, { setState } from "react";
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
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

function Sidebar() {
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
