import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { AppContext } from "../AppContext";
function Login() {
  const [username, setUsername] = useContext(AppContext);
  const SignIn = async () => {
    const result = await auth.signInWithPopup(provider);
    setUsername(result.user);
  };
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png"
        alt=""
        style={{ width: 100, height: 100 }}
      />
      <h1>SergeMessenger</h1>
      <Button size="large" variant="contained" color="primary" onClick={SignIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
