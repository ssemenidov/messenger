import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./Message.css";
const Message = forwardRef(({ message, username }, ref) => {
  const isUser = message.username === username;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Typography
        variant="h6"
        component="h6"
        color="textSecondary"
        gutterBottom
      >
        {!isUser && message.username}
      </Typography>
      <Card className={isUser ? "card-user" : "card-guest"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
