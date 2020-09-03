import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
function Login(props) {
  const SignIn = async () => {
    const result = await auth.signInWithPopup(provider);
    console.log(result);
    props.parentCallback(result.user.displayName);
  };
  return (
    <div>
      <Button color="primary" onClick={SignIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
