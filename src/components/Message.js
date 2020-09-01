import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function Message(props) {
  return (
    <div>
      <Typography
        variant="h8"
        component="h8"
        color="textSecondary"
        gutterBottom
      >
        {props.username}
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
