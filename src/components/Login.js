import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
function Login(props) {
  const SignIn = async () => {
    const result = await auth.signInWithPopup(provider);
    props.parentCallback(result.user.displayName);
    console.log(result);
  };
  return (
    <div>
      <Button size="large" variant="contained" color="primary" onClick={SignIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
