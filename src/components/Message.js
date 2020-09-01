import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
function Message({ message, username }) {
  const isUser = message.username === username;
  return (
    <div className={`messege ${isUser && "messege--user"}`}>
      <Typography
        variant="h8"
        component="h8"
        color="textSecondary"
        gutterBottom
      >
        {!isUser && message.username}
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
