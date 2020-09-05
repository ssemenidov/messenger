import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { AppContext } from "../App";
function Login() {
  const [username, setUsername] = useContext(AppContext);
  const SignIn = async () => {
    const result = await auth.signInWithPopup(provider);
    setUsername(result.user.displayName);
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
