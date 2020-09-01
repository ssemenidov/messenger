import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
function Message(props) {
  return (
    <div className="card">
      <Typography
        variant="h8"
        component="h8"
        color="textSecondary"
        gutterBottom
      >
        {props.message.username}
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
